
<script setup>
import { ref } from 'vue';

const fontSize = ref(16);
</script>

<template>
  <div class="mx-auto flex flex-col gap-[30px] justify-center items-center mt-[100px]" >
    <h1>Thay đổi kích thước chữ</h1>
    <div class="border-[1px] border-black">
      <input
        type="number"
        v-model="fontSize"
        placeholder="Nhập kích thước chữ (px)"
        class="w-[300px] h-[50px]  p-3"       />

    </div>

    <p :style="{ fontSize: fontSize + 'px' }">
      Hello World !!!!!  </p>
  </div>
</template>
