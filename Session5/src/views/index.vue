<script>
import ComponentButton from "@/components/Button/ComponentButtonDelete.vue";
import ComponentTable from "@/components/ComponentTable.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import ComponentDropdown from "@/components/ComponentDropdown.vue";
import ComponentButtonAddTask from "@/components/Button/ComponentAddTask.vue"
import ComponentButtonDelete from "@/components/Button/ComponentButtonDelete.vue"
import ComponentRadio from "@/components/ComponentRadio.vue"
import DialogAddTask from "@/components/ComponentDialogAddTask.vue"
import ComponentConfirm from "@/components/ComponentConfirm.vue";
import { ref } from "vue";

export default {
  name: 'Session5',
  components: {
    ComponentButton,
    ComponentTable,
    ComponentSearch,
    ComponentDropdown,
    ComponentButtonAddTask,
    ComponentButtonDelete,
    ComponentRadio,
    DialogAddTask,
    ComponentConfirm
  },
  setup() {
    const todos = ref([]);
    const isDeleteDialogVisible = ref(false);
    const isDeleteAllDialogVisible = ref(false);
    const taskIdToDelete = ref(null);
    const taskToEdit = ref(null);  // Thêm state để lưu task đang edit
    const searchQuery = ref("");
    const filteredTodos = ref([]);

    const loadFromLocalStorage = () => {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
      }
    };

    loadFromLocalStorage();
    const handleAddTask = (taskData) => {
      if (!taskData || !taskData.content) {

        return;
      }
      const newTask = {
        ...taskData,
        id: todos.value.length + 1,
        completed: false
      };
      todos.value = [...todos.value, newTask];
      handleSearch(searchQuery.value);
      saveToLocalStorage();
    };

    const handleEditTask = (updatedTask) => {
      const index = todos.value.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        todos.value[index] = { ...updatedTask, completed: todos.value[index].completed };
        saveToLocalStorage();
      }
      taskToEdit.value = null;  // Reset task đang edit
    };

    const startEditing = (task) => {
      taskToEdit.value = task;  // Set task đang được edit
    };

    const cancelEditing = () => {
      taskToEdit.value = null;  // Hủy việc edit
    };

    const showDeleteDialog = (taskId) => {
      taskIdToDelete.value = taskId;
      isDeleteDialogVisible.value = true;
    };

    const handleConfirmDelete = () => {
      todos.value = todos.value.filter(task => task.id !== taskIdToDelete.value);
      saveToLocalStorage();
      isDeleteDialogVisible.value = false;
      handleSearch(searchQuery.value);
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
      handleSearch(searchQuery.value);
    };

    const handleCancelDeleteAll = () => {
      isDeleteAllDialogVisible.value = false;
    };
    const handleSearch = (query) => {
      searchQuery.value = query;
      if (!query) {
        filteredTodos.value = todos.value;
      } else {
        filteredTodos.value = todos.value.filter(todo =>
          todo.name.toLowerCase().includes(query.toLowerCase())
        );
      }
    };
    handleSearch(searchQuery.value);
    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };



    return {
      todos: filteredTodos,
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
      handleSearch
    }
  }
}
</script>

<template>
  <div class="relative overflow-y-hidden shadow-md sm:rounded-lg p-[50px] dark:bg-gray-900">
    <h1 class="text-center text-4xl text-white font-bold my-[10px]">TODO LIST</h1>
    <div class="h-[100vh] relative">
      <div class="flex mb-[20px] justify-end gap-[20px]">
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

      <div class="flex mb-[30px] justify-between px-[20px]">
        <ComponentDropdown/>
        <ComponentRadio/>
        <ComponentSearch  @search="handleSearch"/>
      </div>

      <ComponentTable
        :data="todos"
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
