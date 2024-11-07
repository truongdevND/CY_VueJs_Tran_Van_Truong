<script setup>
import {RouterLink, RouterView} from 'vue-router'
import {ref} from 'vue'

const displaymenu = ref(false)
const handlerOpenMenu = () => {
  displaymenu.value = !displaymenu.value
}
</script>

<template>
  <div class="relative">
    <div @click="handlerOpenMenu" class="fixed top-[20px] left-[20px] z-9999">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 128 128"
      >
        <path
          fill="#fff"
          d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"
        ></path>
        <path
          fill="#444b54"
          d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
        ></path>
        <path
          fill="#444b54"
          d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
        ></path>
        <g>
          <path
            fill="#444b54"
            d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"
          ></path>
        </g>
      </svg>
    </div>
    <Transition name="fade" class="text-white fixed z-9999 top-0 left-0" v-if="displaymenu">
      <div

        class=" py-[30px] z-9999  left-0 top-0 w-[300px] h-screen bg-gray-500"
      >
        <div class="px-[20px] text-3xl font-bold uppercase flex justify-between">
          <p>bài tập VueJs</p>
          <svg @click="handlerOpenMenu" class="text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20"
               height="20" viewBox="0 0 64 64">
            <path
              d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
          </svg>
        </div>
        <div class="border-b-[1px] border-black my-[20px]"></div>
        <nav class="flex px-[30px] flex-col gap-[10px] text-[24px] font-medium">

          <RouterLink class="hover:text-red-600  transform hover:scale-105" to="/1">Bài 1</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105 " to="/2">Bài 2</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/3">Bài 3</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/4">Bài 4</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105 " to="/5">Bài 5</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/6">Bài 6</RouterLink>

          <RouterLink class=" hover:text-red-600 transform hover:scale-105" to="/7">Bài 7</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105 " to="/8">Bài 8</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105 " to="/10">Bài 10</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/11">Bài 11</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/12">Bài 12</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/13">Bài 13</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/14">Bài 14</RouterLink>

          <RouterLink class="hover:text-red-600 transform hover:scale-105" to="/15">Bài 15</RouterLink>


        </nav>
      </div>
    </Transition>
    <RouterView class=""/>
  </div>



</template>
