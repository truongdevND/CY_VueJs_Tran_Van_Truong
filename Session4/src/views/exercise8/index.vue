<script>
import {ref} from "vue";

export default {
  setup() {
    const arrayNote  = ref([])


    return {}
  }
}
</script>                                                                                                                                                                           5555555
<template>
  <div class="w-full h-auto ">
    <ul class="w-[700px] min-h-[800px] mx-auto bg-gray-100 p-[50px] rounded-[20px]">
      <h1 class="text-2xl font-bold text-center mb-[20px]">DANH SÁCH GHI CHÚ</h1>
      <div class="flex items-center justify-center mb-[20px]"  >
        <span class="text-[18px] font-medium mr-[10px]">Thêm mới ghi chú:</span>
        <input class="bg-gray-100 border-b-[0.5px] border-black" type="text" >
        <button class="w-[100px] h-[30px] bg-red-400 hover:bg-red-600  text-white font-medium rounded-[5px] ml-[10px]">Thêm mới</button>
      </div>
      <li class="w-full h-auto p-[10px] bg-white rounded-[10px] flex flex-col gap-[20px] ">
        <p class="px-[20px] text-[16px] font-medium ">lau nhà</p>
        <div class="border-b-[0.5px] border-gray-500"></div>
        <div class=" flex justify-end px-[20px] gap-2.5">
          <span class="material-icons text-blue-500 hover:text-blue-600 cursor-pointer">
            edit
          </span>
          <span class="material-icons text-red-400 hover:text-red-600 cursor-pointer">
            delete
          </span>
        </div>
      </li>
    </ul>

  </div>
</template>


<style lang="scss" scoped>

</style>
