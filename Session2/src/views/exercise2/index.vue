<script>
import { computed, ref } from "vue";
import { arrayTasks } from "./dto.js";

export default {
  name: "Exercise2",
  setup() {
    const formData = ref({
      isDivVisible: false,
      Error: '',
      taskName: '',
      taskContent: '',
      taskDeadline: '',
      editingTaskIndex: null
    });

    const tasks = ref(arrayTasks);
    const selectedFilter = ref('all');

    const handleAddTask = () => {
      if (!formData.value.taskName || !formData.value.taskContent || !formData.value.taskDeadline) {
        formData.value.Error = 'Vui lòng nnhập đầy đủ các trường!!!';
      } else {
        if (formData.value.editingTaskIndex !== null) {
          tasks.value[formData.value.editingTaskIndex] = {
            taskName: formData.value.taskName,
            taskContent: formData.value.taskContent,
            taskDeadline: formData.value.taskDeadline,
            completed: false
          };
          formData.value.editingTaskIndex = null;
        } else {
          tasks.value.push({
            taskName: formData.value.taskName,
            taskContent: formData.value.taskContent,
            taskDeadline: formData.value.taskDeadline,
            completed: false
          });
        }
        formData.value.Error = '';
        resetForm();
      }
    };

    const resetForm = () => {
      formData.value.taskName = '';
      formData.value.taskContent = '';
      formData.value.taskDeadline = '';
    };

    const toggleDiv = () => {
      formData.value.isDivVisible = !formData.value.isDivVisible;
      if (!formData.value.isDivVisible) resetForm();
    };

    const editTask = (index) => {
      const taskToEdit = tasks.value[index];
      formData.value.taskName = taskToEdit.taskName;
      formData.value.taskContent = taskToEdit.taskContent;
      formData.value.taskDeadline = taskToEdit.taskDeadline;
      formData.value.editingTaskIndex = index;
      formData.value.isDivVisible = true;
    };

    const deleteTask = (index) => {
      tasks.value.splice(index, 1);
    };

    const filteredTasks = computed(() => {
      switch (selectedFilter.value) {
        case 'open':
          return tasks.value.filter(task => !task.completed);
        case 'closed':
          return tasks.value.filter(task => task.completed);
        default:
          return tasks.value;
      }
    });

    const allTasks = computed(() => tasks.value.length);
    const openTasks = computed(() => tasks.value.filter(task => !task.completed).length);
    const closedTasks = computed(() => tasks.value.filter(task => task.completed).length);

    return {
      formData,
      toggleDiv,
      handleAddTask,
      tasks,
      allTasks,
      openTasks,
      closedTasks,
      editTask,
      deleteTask,
      selectedFilter,
      filteredTasks
    };
  }
}
</script>

<template>
  <div class="relative bg-gray-200 w-full min-h-[100vh] h-auto">
    <div class="relative w-[600px] h-[800px] mx-auto flex flex-col bg-white p-[5px] rounded-[20px]">
      <div>
        <div class="flex justify-between items-center mt-[35px] mx-[40px] gap-[20px] font-[400] text-2xl text-gray-400">
          <div class="flex flex-col text-center cursor-pointer">
            <p>Messages</p>
            <div class="border-b-[0.5px] mt-5"></div>
          </div>
          <div class="flex flex-col text-center cursor-pointer">
            <p>Today's Task</p>
            <div class="border-b-[0.5px] border-black mt-5"></div>
          </div>
          <div class="flex flex-col text-center cursor-pointer">
            <p>Last Activity</p>
            <div class="border-b-[0.5px] mt-5"></div>
          </div>
        </div>
        <div class="border-b border-gray-300"></div>
      </div>

      <div v-if="formData.isDivVisible"
           class="absolute p-10 z-10 flex flex-col gap-6 w-4/5 items-center rounded-2xl right-12 top-[250px] bg-gray-300">
        <div class="relative text-center justify-center w-full items-center flex">
          <h2 class="text-2xl font-bold text-center">ADD NEW TASK</h2>
          <p @click="toggleDiv" class="absolute right-0 text-[26px] cursor-pointer text-red-700 font-bold">X</p>
        </div>
        <form @submit.prevent="handleAddTask" class="space-y-4">
          <label class="flex items-center gap-4 w-full max-w-md">
            <span class="w-2/3">Task Name:</span>
            <input v-model="formData.taskName" type="text" class="w-full p-2 border border-gray-400 rounded-md"/>
          </label>

          <label class="flex items-center gap-4 w-full max-w-md">
            <span class="w-2/3">Task Content:</span>
            <input v-model="formData.taskContent" type="text" class="w-full p-2 border border-gray-400 rounded-md"/>
          </label>

          <label class="flex items-center gap-4 w-full max-w-md">
            <span class="w-2/3">Deadline:</span>
            <input v-model="formData.taskDeadline" type="datetime-local" class="w-full p-2 border border-gray-400 rounded-md"/>
          </label>
          <p class="text-red-500 text-sm">{{ formData.Error }}</p>
          <button class="w-full h-12 bg-blue-700 text-white rounded-lg font-semibold mt-4">
            Submit
          </button>
        </form>
      </div>

      <div class="p-[40px] h-full flex flex-col gap-[50px] bg-gray-100">
        <div class="flex flex-col gap-[40px] mt-[20px]">
          <div class="flex justify-between">
            <div>
              <h2 class="text-3xl font-bold">Today's Task</h2>
              <p class="text-gray-400 text-4 mt-[10px]">Wednesday, 11 May</p>
            </div>
            <button @click="toggleDiv" class="text-blue-700 bg-blue-100 text-[24px] w-[200px] rounded-[10px]">+ New Task</button>
          </div>
        </div>
        <ul class="flex justify-between">
          <li @click="selectedFilter = 'all'"
              :class="{'text-blue-400': selectedFilter === 'all', 'text-gray-400': selectedFilter !== 'all'}"
              class="text-center text-[18px] cursor-pointer">
            All <span class="rounded-full bg-blue-700 p-2 text-white">{{allTasks}}</span>
          </li>
          <li class="border-r-[1px] border-gray-400"></li>
          <li @click="selectedFilter = 'open'"
              :class="{'text-blue-400': selectedFilter === 'open', 'text-gray-400': selectedFilter !== 'open'}"
              class="text-center text-[18px] cursor-pointer">
            Open <span class="rounded-full bg-blue-700 p-2 text-white">{{openTasks}}</span>
          </li>
          <li @click="selectedFilter = 'closed'"
              :class="{'text-blue-400': selectedFilter === 'closed', 'text-gray-400': selectedFilter !== 'closed'}"
              class="text-center text-[18px] cursor-pointer">
            Closed <span class="rounded-full bg-blue-700 p-2 text-white">{{closedTasks}}</span>
          </li>
          <li class="text-gray-400 text-center text-[18px] cursor-pointer">
            Archived <span class="rounded-full bg-blue-700 p-2 text-white">2</span>
          </li>
        </ul>
        <div class="flex flex-col h-[400px] gap-[20px] overflow-y-auto">
          <ul class="flex flex-col gap-[20px]">
            <li v-for="(task, index) in filteredTasks" :key="index"
                class="flex flex-col gap-[10px] p-[20px] bg-white rounded-[20px]">
              <div class="flex justify-between">
                <div>
                  <b class="text-3xl font-bold" :class="{'line-through': task.completed}">{{ task.taskName }}</b>
                  <p>{{ task.taskContent }}</p>
                </div>
                <input type="checkbox" v-model="task.completed" class="w-[30px] h-[30px] cursor-pointer">
              </div>
              <div class="border-b-[1px] border-gray-500"></div>
              <div class="flex justify-between">
                <div class="flex justify-between w-[95%]">
                  <p>{{task.taskDeadline}}</p>
                  <div class="flex gap-[30px]">
                    <span @click="editTask(index)" class="material-icons cursor-pointer text-blue-500 hover:text-blue-700">edit</span>
                    <span @click="deleteTask(index)" class="material-icons cursor-pointer text-red-500 hover:text-red-700">delete</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
