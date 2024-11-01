<template>
  <ComponentButtonAddTask @click="openAddTask" />

  <div v-if="isAddTask" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeModal">
    <div class="relative p-4 w-full max-w-md max-h-full mx-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Create New Product
          </h3>
          <button type="button" @click="closeModal" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <form class="p-4 md:p-5">
         <label>
           <span>Task Name:</span>

         </label>
          <button type="submit" class="...">Add new product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentButtonAddTask from '@/components/Button/ComponentAddTask.vue'
import { ref } from "vue";

export default {
  name: "DialogAddTask",
  components: {
    ComponentButtonAddTask
  },
  setup() {
    const isAddTask = ref(false);

    const openAddTask = () => {
      isAddTask.value = true;
    }

    const closeModal = () => {
      isAddTask.value = false;
    }

    return {
      openAddTask,
      closeModal,
      isAddTask
    }
  }
}
</script>

