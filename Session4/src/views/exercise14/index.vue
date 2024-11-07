<script>
import {onMounted, ref, watch} from "vue";
import {cartService} from "@/views/exercise12/service/cartService.js";

export default {
  name: "exercise14",
  setup() {
    const textSearch = ref('')
    const dropdown = ref(false)
    const productData = ref(null);
    const fetchData = async () => {
      const res = await cartService.getData();
      productData.value = res.data.products;
      console.log(productData.value);
    }
    onMounted(() => {
      fetchData();
    })
    const handleSearch = () => {
      productData.value = productData.value.filter(item => item.title.toLowerCase().includes(textSearch.value.toLowerCase())
      );
    }
    watch(textSearch, (newSeach) => {
      if (newSeach) {
        handleSearch();
      } else {
        fetchData();
      }
    })
    const hanldeDropdown = () => {
      dropdown.value = !dropdown.value;
    }

    const handleSort = (sortType) => {
      const sortedTodos = [...todos.value];
      switch (sortType) {
        case 'increase':
          sortedTodos.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
          break;
        case 'decrease':
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
    return {
      textSearch,
      productData,
      handleSearch,
      hanldeDropdown,
      dropdown
    }
  }
}
</script>
<template>


  <div class=" relative overflow-x-auto px-[50px]">
    <h1 class="text-2xl my-[50px] font-bold text-center uppercase">product management</h1>
    <div class="flex justify-between ">
      <div class="max-w-md my-[20px] ">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" v-model="textSearch"
                 class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                 placeholder="Search Mockups, Logos..." required/>

        </div>
      </div>
      <div class="relative">
        <button @click="hanldeDropdown"
          class="text-white h-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          type="button">Dropdown button
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4"/>
          </svg>
        </button>

        <div v-if="dropdown"
             class="absolute top-[70px]  z-10  bg-gray-100 divide-y divide-gray-100 rounded-lg shadow-2xl w-44 ">
          <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
            <li>
              <p
                 class="block px-4 py-2 hover:bg-gray-200 ">Increase</p>
            </li>
            <li>
              <p
                 class="block px-4 py-2 hover:bg-gray-200 ">Decrease</p>
            </li>
            <li>
              <p
                 class="block px-4 py-2 hover:bg-gray-200 ">Name (A-Z)</p>
            </li>
            <li>
              <p class="block px-4 py-2 hover:bg-gray-200 ">Name (Z-A)</p>
            </li>
            <li>
              <p class="block px-4 py-2 hover:bg-gray-200 ">Category</p>
            </li>
          </ul>
        </div>
      </div>


    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-800 ">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
      <tr>
        <th scope="col" class="px-6 py-3">
          id
        </th>
        <th scope="col" class="px-6 py-3">
          Image
        </th>
        <th scope="col" class="px-6 py-3">
          Product name
        </th>

        <th scope="col" class="px-6 py-3">
          Category
        </th>
        <th scope="col" class="px-6 py-3">
          Price
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in productData" :key="item.id" class="bg-white border-b ">
        <td class="px-6 py-4">
          {{ item.id }}
        </td>
        <td class="px-6 py-4">
          <img class="w-[50px] h-[50px] object-cover" :src="item.thumbnail">
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {{ item.title }}
        </th>

        <td class="px-6 py-4">
          {{ item.category }}
        </td>
        <td class="px-6 py-4">
          {{ item.price }} $
        </td>
      </tr>

      </tbody>
    </table>
  </div>

</template>


<style lang="scss" scoped>

</style>
