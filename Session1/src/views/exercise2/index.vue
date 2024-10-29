
<script >
import {computed, ref} from 'vue';
export default{

  name: 'exercise2',
  setup() {
    const sideLength = ref(0);
    let area = computed(() =>sideLength.value * 2) ;

    return{
      sideLength,
      area
    }
    }
}


</script>


<template>
  <div class="w-full mt-[100px] h-full flex-col gap-[20px] flex justify-center items-center text-center">
    <p>Nhập chiều dài hình vuông (cm)</p>
    <div class="border-[1px] border-black">
      <input class="w-[300px] h-[50px] p-3 " type="number"  v-model.number="sideLength" >

    </div>
    <p class="">Diện tích:{{area }} cm2 </p>

    <div :style="{ width: sideLength + 'px', height : sideLength +'px' }" class="bg-red-600 h-10"></div>
  </div>
</template>

