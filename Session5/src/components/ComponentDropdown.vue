<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: "ComponentDropdown",
  emits: ['sort'],
  setup(props, { emit }) {
    const isDropdownOpen = ref(false);
    const selectedOption = ref('Newest');

    const sortOptions = [
      {label: 'Newest', value: 'newest'},
      {label: 'Oldest', value: 'oldest'},
      {label: 'Name (A-Z)', value: 'name-asc'},
      {label: 'Name (Z-A)', value: 'name-desc'},
      {label: 'Status (Complete)', value: 'status-complete'},
      {label: 'Status (Incomplete)', value: 'status-incomplete'}
    ];

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const handleSort = (option) => {
      selectedOption.value = option.label;
      emit('sort', option.value);
      isDropdownOpen.value = false;
    };

    // Close dropdown when clicking outside
    const closeDropdown = (e) => {
      if (!e.target.closest('#dropdownActionButton')) {
        isDropdownOpen.value = false;
      }
    };

    // Add event listener when component is mounted
    onMounted(() => {
      document.addEventListener('click', closeDropdown);
    });

    // Remove event listener when component is unmounted
    onUnmounted(() => {
      document.removeEventListener('click', closeDropdown);
    });

    return {
      isDropdownOpen,
      toggleDropdown,
      sortOptions,
      selectedOption,
      handleSort
    };
  }
}
</script>

<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      id="dropdownActionButton"
      class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      type="button"
    >
      <span class="sr-only">Sort options</span>
      {{ selectedOption }}
      <svg
        class="w-2.5 h-2.5 ms-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
        :class="{ 'transform rotate-180': isDropdownOpen }"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <div
      v-if="isDropdownOpen"
      class="absolute z-10 top-[40px] right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        class="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownActionButton"
      >
        <li
          v-for="option in sortOptions"
          :key="option.value"
        >
          <a
            href="#"
            @click.prevent="handleSort(option)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            :class="{ 'bg-gray-100 dark:bg-gray-600': selectedOption === option.label }"
          >
            {{ option.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.transform {
  transition: transform 0.2s ease;
}
</style>
