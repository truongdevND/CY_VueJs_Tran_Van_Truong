<template>
  <div class="flex space-x-4">
    <div
      :class="[
        'w-6 h-6 rounded-full border-2 cursor-pointer',
        selectedOption === 'option1' ? 'bg-blue-500 border-white' : 'border-gray-400'
      ]"
      @click="selectOption('option1')"
    ></div>
    <span class="text-gray-200  text-[16px] font-400"> Done</span>

    <div
      :class="[
        'w-6 h-6 rounded-full border-2 cursor-pointer',
        selectedOption === 'option2' ? 'bg-blue-500 border-white' : 'border-gray-400'
      ]"
      @click="selectOption('option2')"
    ></div>
    <span class="text-gray-200 text-[16px] font-400">Reject</span>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "ComponentRadio",
  setup() {
    const selectedOption = ref(null);

    const selectOption = (option) => {
      selectedOption.value = option;
    };

    return {
      selectedOption,
      selectOption,
    };
  },
};
</script>
