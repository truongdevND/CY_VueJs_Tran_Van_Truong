<script>
import { ref, computed } from 'vue';
import productData from './dto.js';

export default {
  name: 'exercise1',
  setup() {
    const product = ref(productData);

    const calculateDiscountedPrice = (price, discount) => {
      return price * (1 - discount);
    };

    const formattedPrice = computed(() => {
      return calculateDiscountedPrice(product.value.price, product.value.discount);
    });

    const productDescription = computed(() => {
      return product.value.inStock ? "Sản phẩm có sẵn." : "Sản phẩm tạm hết hàng.";
    });

    const buttonClass = computed(() => {
      return {
        'bg-red-600': true,
        ...product.value.classObject
      };
    });

    return {
      product,
      formattedPrice,
      productDescription,
      buttonClass
    };
  }
};
</script>

<template>
  <div class="w-[500px] h-auto rounded-[10px] mx-auto border-[1px] border-black mt-[100px] p-[30px] bg-gray-100">
    <img class="w-full h-[400px] object-cover shadow-2xl rounded-[10px]" :src="product.image" :alt="product.imageAlt" />
    <div class="mt-5 flex flex-col gap-[20px]">
      <h2 :class="{'text-green-500': product.inStock, 'text-red-500': !product.inStock}" class="text-3xl font-bold">
        {{ product.product }}
      </h2>
      <div class="flex justify-between">
        <div class="">
          <p class="text-2xl line-through  mb-1.5">{{ product.price }} $</p>

          <p class="text-3xl">{{ formattedPrice }} $</p>
        </div>

        <p class="text-[18px]">Số lượng: {{ product.quantity }} chiếc</p>
      </div>
      <p >{{productDescription}}</p>
      <button :class="buttonClass" class="w-full rounded-[10px] h-[50px] mt-[20px] text-white">
        Mua ngay
      </button>
    </div>
  </div>
</template>
