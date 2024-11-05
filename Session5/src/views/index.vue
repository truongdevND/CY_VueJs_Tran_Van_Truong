<script>
import ComponentTable from "@/components/ComponentTable.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import ComponentDropdown from "@/components/ComponentDropdown.vue";
import ComponentButton from "@/components/Button/ComponentButton.vue"
import ComponentButtonDelete from "@/components/Button/ComponentButtonDelete.vue"
import ComponentRadio from "@/components/ComponentRadio.vue"
import DialogAddTask from "@/components/ComponentDialogAddTask.vue"
import ComponentConfirm from "@/components/ComponentConfirm.vue";
import { ref } from "vue";

export default {
  name: 'Session5',
  components: {
    ComponentTable,
    ComponentSearch,
    ComponentDropdown,
    ComponentButton,
    ComponentButtonDelete,
    ComponentRadio,
    DialogAddTask,
    ComponentConfirm
  },
  setup() {
    const todos = ref([]);
    const filteredTodos = ref([]);
    const isDeleteDialogVisible = ref(false);
    const isDeleteAllDialogVisible = ref(false);
    const taskIdToDelete = ref(null);
    const taskToEdit = ref(null);
    const searchQuery = ref("");

    const loadFromLocalStorage = () => {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
        filteredTodos.value = [...todos.value];
      }
    };

    loadFromLocalStorage();

    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    const handleAddTask = (taskData) => {
      if (!taskData || !taskData.content) return;

      const newTask = {
        ...taskData,
        id: todos.value.length + 1,
        completed: false
      };
      todos.value = [...todos.value, newTask];
      saveToLocalStorage();
      applyFiltersAndSort();
    };

    const handleEditTask = (updatedTask) => {
      const index = todos.value.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        todos.value[index] = { ...updatedTask, completed: todos.value[index].completed };
        saveToLocalStorage();
        applyFiltersAndSort();
      }
      taskToEdit.value = null;
    };

    const startEditing = (task) => {
      taskToEdit.value = task;
    };

    const cancelEditing = () => {
      taskToEdit.value = null;
    };

    const showDeleteDialog = (taskId) => {
      taskIdToDelete.value = taskId;
      isDeleteDialogVisible.value = true;
    };

    const handleConfirmDelete = () => {
      todos.value = todos.value.filter(task => task.id !== taskIdToDelete.value);
      saveToLocalStorage();
      isDeleteDialogVisible.value = false;
      applyFiltersAndSort();
    };

    const handleCancelDelete = () => {
      isDeleteDialogVisible.value = false;
      taskIdToDelete.value = null;
    };

    const showDeleteAllDialog = () => {
      isDeleteAllDialogVisible.value = true;
    };

    const handleConfirmDeleteAll = () => {
      todos.value = [];
      saveToLocalStorage();
      isDeleteAllDialogVisible.value = false;
      applyFiltersAndSort();
    };

    const handleCancelDeleteAll = () => {
      isDeleteAllDialogVisible.value = false;
    };

    const handleSearch = (query) => {
      searchQuery.value = query;
      applyFiltersAndSort();
    };

    const handleStatusUpdate = (taskId) => {
      const taskIndex = todos.value.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        todos.value[taskIndex].completed = !todos.value[taskIndex].completed;
        saveToLocalStorage();
        applyFiltersAndSort();
      }
    };

    const handleSort = (sortType) => {
      const sortedTodos = [...todos.value];
      switch (sortType) {
        case 'newest':
          sortedTodos.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
          break;
        case 'oldest':
          sortedTodos.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
          break;
        case 'name-asc':
          sortedTodos.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          sortedTodos.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'status-complete':
          sortedTodos.sort((a, b) => (b.completed ? 1 : 0) - (a.completed ? 1 : 0));
          break;
        case 'status-incomplete':
          sortedTodos.sort((a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0));
          break;
      }
      todos.value = sortedTodos;
      applyFiltersAndSort();
    };

    const applyFiltersAndSort = () => {
      const filtered = todos.value.filter(todo =>
        todo.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
      filteredTodos.value = filtered;
    };

    return {
      todos,
      filteredTodos,
      handleAddTask,
      handleEditTask,
      taskToEdit,
      startEditing,
      cancelEditing,
      isDeleteDialogVisible,
      handleConfirmDelete,
      handleCancelDelete,
      showDeleteDialog,
      showDeleteAllDialog,
      isDeleteAllDialogVisible,
      handleConfirmDeleteAll,
      handleCancelDeleteAll,
      handleSearch,
      handleStatusUpdate,
      handleSort
    }
  }
}
</script>

<template>
  <div class="relative shadow-md sm:rounded-lg p-12 dark:bg-gray-900">
    <h1 class="text-center text-4xl text-white font-bold my-4">TODO LIST</h1>
    <div class="min-h-screen relative">
      <div class="flex mb-5 justify-end gap-5">
        <DialogAddTask
          :task="taskToEdit"
          @add-task="handleAddTask"
          @update-task="handleEditTask"
          @cancel="cancelEditing"
        />
        <ComponentButtonDelete @click="showDeleteAllDialog"/>
        <ComponentConfirm
          :visible="isDeleteAllDialogVisible"
          @confirm="handleConfirmDeleteAll"
          @cancel="handleCancelDeleteAll"
        />
      </div>

      <div class="flex mb-8 justify-between px-5">
        <ComponentDropdown @sort="handleSort"/>
        <ComponentRadio text-radio="hello"/>
        <ComponentSearch @search="handleSearch"/>
      </div>

      <ComponentTable
        :data="filteredTodos"
        @toggle-status="handleStatusUpdate"
        @delete-task="showDeleteDialog"
        @edit-task="startEditing"
      />

      <ComponentConfirm
        :visible="isDeleteDialogVisible"
        @confirm="handleConfirmDelete"
        @cancel="handleCancelDelete"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
