<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <nav class=" bg-gray-200 mt-2.5w-full h-[50px] mt-2.5 flex justify-center items-center text-white text-center gap-2.5">
    <RouterLink class="bg-green-700 w-[100px] h-full flex text-2xl justify-center items-center text-center " to="/1">Bài 1</RouterLink>
    <RouterLink class="bg-red-700 w-[100px] h-full flex text-2xl justify-center items-center text-center " to="/2">Bài 2</RouterLink>

  </nav>

  <RouterView />
</template>
