<script>
import {ref, watch} from 'vue';
export default{
  setup() {
    const isChecked = ref(false);

    return {
      isChecked
    };

  }
}



</script>

<template>
  <div class=" mx-auto mt-[100px] w-[700px] flex flex-col justify-center items-center ">
    <h1 class=" text-[50px] w-[300px] rounded-[30px]   text-center"  :class="{'text-green-500 font-bold':isChecked ,'text-red-500':!isChecked}">Hello World!!!</h1>
    <input type="checkbox"
           class="w-[50px] h-[50px]  mt-[30px]"
           v-model="isChecked"
    >
  </div>
</template>
