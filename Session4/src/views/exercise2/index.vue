<script >
import {ref} from "vue";

export default {
  setup() {
    const  count = ref(0)
  const incrementCount = ()=>{
      count.value++
    }

    return {
      count,
      incrementCount
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center text-center w-[400px] h-[400px]  gap-[50px] border-[1px] border-black mx-auto">
    <p class="text-center text-[16px] font-bold">Số lượt nhấn là: <span>{{count}}</span></p>
    <button @click="incrementCount" class="w-[50%] h-[50px] text-white bg-red-500 text-2xl font-bold rounded-[10px]">Nhấn vào đây</button>
  </div>

</template>

