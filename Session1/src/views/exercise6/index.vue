<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const products = ref([
      { name: 'Sản phẩm A', price: 1000, quantity: 0 },
      { name: 'Sản phẩm B', price: 2000, quantity: 0 },
      { name: 'Sản phẩm C', price: 3000, quantity: 0 },
    ]);

            const total = computed(() => {
      return products.value.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);
    });

    return {
      products,
      total,
    };
  },
};
</script>
<template>
  <div class="w-[700px] h-[700px] border-[1px] border-black flex flex-col gap-[50px] justify-center items-center rounded-[10px] mx-auto p-[50px] text-[24px] mt-[100px]">
    <h1 class="text-center">Giỏ hàng</h1>
    <div class="flex flex-col gap-[40px] ">
      <div v-for="(product, index) in products" :key="index" class="flex gap-[50px] ">
        <h3>{{ product.name }}</h3>
        <p>Giá: {{ product.price }}đ</p>
        <p>
          Số lượng:
          <input class="w-[100px] border"
            type="number"
            min="0"
            v-model.number="product.quantity"
          />
        </p>
      </div>
    </div>
    <h2 class="text-center">Tổng giá trị: {{ total }}đ</h2>
  </div>
</template>
