<script>
import ComponentButton from "@/components/Button/ComponentButtonDelete.vue";
import ComponentTable from  "@/components/ComponentTable.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import ComponentDropdown  from "@/components/ComponentDropdown.vue";
import ComponentButtonAddTask from "@/components/Button/ComponentAddTask.vue"
import ComponentButtonDelete from "@/components/Button/ComponentButtonDelete.vue"
import ComponentRadio from "@/components/ComponentRadio.vue"
import DialogAddTask from "@/components/ComponentDialogAddTask.vue"
import {ref} from "vue";
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
    DialogAddTask

  },
  setup() {
    const todos= ref([])


    const handleAddTask = (taskData) => {
      if (!taskData || !taskData.content) {
        alert("Task content cannot be empty");
        return;
      }
      const newTask = {
        ...taskData,
        completed: false
      };
      todos.value = [...todos.value, newTask];
      saveToLocalStorage();

    };
    const saveToLocalStorage = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };
    const loadFromLocalStorage = () => {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
      }
    };
    loadFromLocalStorage();
    return {
      todos,
      handleAddTask
    }
  }
}
</script>
<template>
    <div class="relative overflow-y-hidden shadow-md sm:rounded-lg p-[50px] dark:bg-gray-900">
      <h1 class="text-center text-4xl text-white font-bold my-[10px]">TODO LIST</h1>
      <div class=" h-[100vh]  ">
        <div class="flex mb-[20px] justify-end gap-[20px]a">
          <DialogAddTask @add-task="handleAddTask"/>
          <ComponentButtonDelete/>
        </div>
        <div class="flex mb-[30px] justify-between px-[20px]">
          <ComponentDropdown/>
          <ComponentRadio/>
          <ComponentSearch />
        </div>
        <ComponentTable :data="todos"/>
      </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
