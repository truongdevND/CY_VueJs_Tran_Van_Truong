<script setup>
import ComponentButtonAddTask from '@/components/Button/ComponentAddTask.vue';
import ComponentInput from "@/components/ComponentInput.vue";
import ComponentTextarena from "@/components/ComponentTextarena.vue";
import ComponentDatePicker from "@/components/ComponentDatePicker.vue";
import { ref, watch } from "vue";

const emit = defineEmits(['add-task']);

const isAddTask = ref(false);
const taskName = ref('');
const taskContent = ref('');
const deadline = ref(null);
const errorMessage = ref('');

const validateForm = () => {
  const errors = [];

  if (!taskName.value?.trim()) {
    errors.push('Task name is required');
  }

  if (!taskContent.value?.trim()) {
    errors.push('Task content is required');
  }

  if (deadline.value && new Date(deadline.value) < new Date()) {
    errors.push('Deadline cannot be in the past');
  }

  errorMessage.value = errors.join(', ');
  return errors.length === 0;
};

watch([taskName, taskContent], () => {
  errorMessage.value = '';
});

const openAddTask = () => {
  isAddTask.value = true;
};

const closeModal = () => {
  isAddTask.value = false;
  resetForm();
};

const resetForm = () => {
  taskName.value = '';
  taskContent.value = '';
  deadline.value = null;
  errorMessage.value = '';
};

const submitForm = () => {
  if (!validateForm()) {
    return;
  }

  emit("add-task", {
    id: Date.now(),
    name: taskName.value.trim(),
    content: taskContent.value.trim(),
    deadline: deadline.value,
  });

  closeModal();
};


</script>

<template>
  <div>
    <ComponentButtonAddTask @click="openAddTask" />

    <Transition name="fade">
      <div v-if="isAddTask"
           class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
           @click="closeModal">

        <div class="relative p-4 w-full max-w-md mx-auto mt-20"
             @click.stop>
          <div class="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl">

            <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Create New Task
              </h3>
              <button
                type="button"
                @click="closeModal"
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-lg p-1.5 inline-flex items-center"
                aria-label="Close modal"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <form @submit.prevent="submitForm" class="p-6 space-y-6" >
              <div class="space-y-4">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Task Name
                    <span class="text-red-500">*</span>
                  </label>
                  <ComponentInput
                    v-model="taskName"
                    placeholder="Enter task name"
                    :error="!taskName && errorMessage"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Task Content
                    <span class="text-red-500">*</span>
                  </label>
                  <ComponentTextarena
                    v-model="taskContent"
                    placeholder="Enter task details"
                    :error="!taskContent && errorMessage"
                  />
                </div>

                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Deadline
                  </label>
                  <ComponentDatePicker
                    v-model="deadline"
                    :min="new Date().toISOString().split('T')[0]"
                  />
                </div>
              </div>

              <div v-if="errorMessage"
                   class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-900/50 dark:text-red-400"
                   role="alert">
                {{ errorMessage }}
              </div>

              <div class="flex justify-end">
                <button
                  type="submit"
                  class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>
