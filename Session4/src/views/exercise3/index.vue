<script>
import {productData} from "./data.js";
import {computed, ref} from "vue";

export default {
  name: "exercise3",
  setup() {
    const filterPrice = ref(0);
    const products = ref(productData);
    const filteredProducts = computed(() => {
      if (!filterPrice.value) {
        return products.value;
      }
      return products.value.filter((item) => item.price <= filterPrice.value);
    });


    return {
      products,
      filterPrice,
      filteredProducts
    }
  }
}
</script>
<template>
  <div class="flex flex-col gap-[50px] w-[800px] mx-auto p-[50px] ">
    <div class="flex justify-center gap-[20px] w-full ">
      <label class="text-xl font-bold  ">Nhập giá tối thiểu:</label>
      <input v-model="filterPrice" class="border-black border-[1px] w-[100px]" type="number">
      <span>đ</span>
    </div>
    <ul class="flex gap-[20px] flex-col border-black border-[1px]  rounded-[20px] p-[30px] w-full ">
      <li v-for="product in filteredProducts" :key="product.id"
          class="flex flex-col gap-[10px] shadow-2xl p-[10px] rounded-[20px] border-b-[1px] border-black">
        <h2 class="text-2xl font-bold ">{{ product.productName }}</h2>
        <p class="text-[16px]">Giá: <span>{{ product.price }} đ</span></p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>
