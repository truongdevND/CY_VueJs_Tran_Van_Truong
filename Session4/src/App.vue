<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <nav class=" h-[50px] w-full flex justify-center items-center text-white text-center gap-2.5 ">
    <RouterLink class="bg-green-700 w-[100px] h-full rounded-[10px] flex text-2xl justify-center items-center text-center " to="/1">Bài 1</RouterLink>
    <RouterLink class="bg-red-700 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/2">Bài 2</RouterLink>
    <RouterLink class="bg-blue-700 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/3">Bài 3</RouterLink>
    <RouterLink class="bg-gray-700 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/4">Bài 4</RouterLink>
    <RouterLink class="bg-black w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/5">Bài 5</RouterLink>
    <RouterLink class="bg-pink-500 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/6">Bài 6</RouterLink>
    <RouterLink class="bg-fuchsia-700 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/7">Bài 7</RouterLink>
    <RouterLink class="bg-yellow-700 w-[100px] h-full rounded-[10px]  flex text-2xl justify-center items-center text-center " to="/8">Bài 8</RouterLink>




  </nav>

  <RouterView />
</template>
