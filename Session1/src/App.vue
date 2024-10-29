<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <nav class=" mt-2.5w-full h-[50px] mt-2.5 flex justify-center items-center text-white text-center gap-2.5">
    <RouterLink class="bg-green-700 w-[100px] h-full flex text-2xl justify-center items-center text-center " to="/1">Bài 1</RouterLink>
    <RouterLink class="bg-red-700 w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/2">Bài 2</RouterLink>
    <RouterLink class="bg-yellow-700 w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/3">Bài 3</RouterLink>
    <RouterLink class="bg-gray-700 w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/4">Bài 4</RouterLink>
    <RouterLink class="bg-blue-700 w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/5">Bài 5</RouterLink>
    <RouterLink class="bg-pink-600 w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/6">Bài 6</RouterLink>
    <RouterLink class="bg-black w-[100px] flex justify-center items-center  text-2xl h-full text-center " to="/7">Bài 7</RouterLink>

  </nav>

  <RouterView />
</template>
