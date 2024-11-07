<script>
import { onMounted, ref, watch } from "vue";
import { cartService } from "@/views/exercise12/service/cartService.js";

export default {
  name: "exercise14",
  setup() {
    const textSearch = ref("");
    const dropdown = ref(false);
    const dropdownCategory = ref(false);
    const categoryData = ref([]);
    const productData = ref(null);
    const originalProductData = ref(null);

    const fetchData = async () => {
      const res = await cartService.getData();
      productData.value = res.data.products;
      originalProductData.value = [...res.data.products];
      extractCategories();
    };

    const extractCategories = () => {
      const categories = [...new Set(productData.value.map(item => item.category))];
      categoryData.value = categories;
    };


    onMounted(() => {
      fetchData();
    });

    const handleSearch = () => {
      productData.value = originalProductData.value.filter(item =>
        item.title.toLowerCase().includes(textSearch.value.toLowerCase())
      );
    };

    watch(textSearch, (newSearch) => {
      if (newSearch) {
        handleSearch();
      } else {
        productData.value = [...originalProductData.value]; // Reset to original data when search is cleared
      }
    });

    const hanldeDropdown = () => {
      dropdown.value = !dropdown.value;
    };

    const hanldeDropdownCategory = () => {
      dropdownCategory.value = !dropdownCategory.value;
    };

    const handleSort = (sortType) => {
      const sortedProducts = [...productData.value];
      switch (sortType) {
        case 'increase':
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case 'decrease':
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'name-desc':
          sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }
      productData.value = sortedProducts;
    };

    const handleSortCategory = (category) => {
      if (category === 'all'){
        fetchData();
      }else {
        productData.value = originalProductData.value.filter(item => item.category === category);
      }
    };

    return {
      textSearch,
      productData,
      handleSearch,
      hanldeDropdown,
      dropdown,
      handleSort,
      dropdownCategory,
      hanldeDropdownCategory,
      categoryData,
      handleSortCategory
    };
  }
};
</script>
<template>
  <div class="overflow-x-auto px-[50px]">
    <h1 class="text-4xl my-[30px] font-bold text-center uppercase">Product Management</h1>
    <div class="flex justify-between ">
      <div class="max-w-md my-[20px]">

        <input type="search" v-model="textSearch"
               class="w-[400px] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Search product name...." required />
      </div>

      <div class="relative">
        <button @click="hanldeDropdown"
                class="text-white h-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button">
          Filter by Category
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <div v-if="dropdown"
             class="absolute top-[70px] z-10 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow-2xl w-44">
          <ul class="py-2 text-sm text-gray-700">
            <li >
              <p @click="handleSortCategory('all')"
                 class="block px-4 uppercase py-2 hover:bg-gray-200">All</p>
            </li>
            <li v-for="(category, index) in categoryData" :key="index">
              <p @click="handleSortCategory(category)"
                 class="block uppercase px-4 py-2 hover:bg-gray-200">{{ category }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative">
        <button @click="hanldeDropdownCategory"
                class="text-white h-[50px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button">
          Sort Options
          <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        <div v-if="dropdownCategory"
             class="absolute top-[70px] z-10 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow-2xl w-44">
          <ul class="py-2 text-sm text-gray-700">
            <li><p @click="handleSort('increase')" class="block px-4 py-2 hover:bg-gray-200">Price Increase</p></li>
            <li><p @click="handleSort('decrease')" class="block px-4 py-2 hover:bg-gray-200">Price Decrease</p></li>
            <li><p @click="handleSort('name-asc')" class="block px-4 py-2 hover:bg-gray-200">Name (A-Z)</p></li>
            <li><p @click="handleSort('name-desc')" class="block px-4 py-2 hover:bg-gray-200">Name (Z-A)</p></li>
          </ul>
        </div>
      </div>
    </div>

    <table class="w-full text-sm text-left rtl:text-right text-gray-800">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
      <tr>
        <th scope="col" class="px-6 py-3">ID</th>
        <th scope="col" class="px-6 py-3">Image</th>
        <th scope="col" class="px-6 py-3">Product Name</th>
        <th scope="col" class="px-6 py-3">Category</th>
        <th scope="col" class="px-6 py-3">Price</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in productData" :key="item.id" class="bg-white border-b">
        <td class="px-6 py-4">{{ item.id }}</td>
        <td class="px-6 py-4"><img class="w-[50px] h-[50px] object-cover" :src="item.thumbnail" /></td>
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ item.title }}</td>
        <td class="px-6 py-4">{{ item.category }}</td>
        <td class="px-6 py-4">{{ item.price }} $</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
