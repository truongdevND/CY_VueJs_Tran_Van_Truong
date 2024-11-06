<script>
import {computed, onMounted, ref, watch} from "vue";
import {userService} from "./service/userService.js";


export default {
  setup() {
    const userData = ref(null);
    const textSearch = ref('')
    const currentPage = ref(1)
    const itemsPerPage = ref(5)
    const filteredData = ref([]);

    const fetchData = async () => {
      const resp = await userService.getData();
      userData.value = resp.data.users;
      filteredData.value = userData.value;
    }
    onMounted(() => {
      fetchData();
    });

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      if (filteredData.value){
        return filteredData.value.slice(start, end);
      }
    });
    console.log(paginatedData)

    const totalPages = computed(() => {
      if (userData.value) {
        return Math.ceil(userData.value.length / itemsPerPage.value);
      }
    });
    const goToPage = (page) => {
      currentPage.value = page;
    };

    const handleSearch = () => {
      currentPage.value = 1;
      if (textSearch.value.trim()) {
        filteredData.value = userData.value.filter((user) =>
          user.lastName.toLowerCase().includes(textSearch.value.toLowerCase())
        );
      } else {
        filteredData.value = userData.value;
      }
    }
    watch(textSearch, (newSearch) => {
      if (newSearch.trim() === "") {
        filteredData.value = userData.value;
      } else {
        handleSearch();
      }
    });
    return {
      textSearch,
      handleSearch,
      paginatedData,
      currentPage,
      totalPages,
      goToPage
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold w-full uppercase mt-[50px] text-center">Danh sách người dùng</h1>
    <div class="rounded-[20px] bg-gray-200 w-[600px] min-h-[400px] mx-auto mt-[20px] p-[50px]">
      <form @submit.prevent="handleSearch()">
        <label for="default-search"
               class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="textSearch" type="search" id="default-search"
                 class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Enter city name" required/>
          <button type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>
      <ul class="w-full rounded-[20px] mt-[20px]  bg-gray-300 p-[20px] flex flex-col gap-[10px]">
        <li v-for="item in paginatedData" :key="item.id" class="flex  gap-2.5 items-center rounded-[10px] bg-white h-[80px] p-[20px] ">
          <div>
            <img class="w-[60px] h-[60px] object-cover" :src="item.image" alt="">
          </div>
          <div>
            <p class="font-bold text-[22px]">  {{item.firstName}} {{item.lastName}} {{item.maidenName}}</p>
            <p class="tex-[18px]">Age:{{item.age}}</p>
          </div>

        </li>
      </ul>
      <div class="flex justify-center mt-4">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="['px-3 py-1 mx-1 rounded', page === currentPage? 'bg-blue-500 text-white':'bg-gray-500 text-white']">
          {{page}}
        </button>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
