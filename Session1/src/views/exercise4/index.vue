<script >
import {ref, watch} from 'vue';
export default{

  name: 'exercise4',
  setup() {
    const num1 = ref(0);
    const num2 = ref(0);

    const sum = ref(0);
    const signal = ref(0);
    const accumulation = ref(0);
    const quotient  = ref(0);

    watch([num1,num2],([newNum1,newNum2]) =>{
      sum.value = newNum1 + newNum2;
      signal.value = newNum1 - newNum2;
      accumulation.value = newNum1 * newNum2;
      quotient.value = newNum1 / newNum2;

    })
return{
  num1,
  num2,
  sum,
  signal,
  accumulation,
  quotient
}
  }
}

</script>

<template>
  <div class="w-[500px] h-[700px] p-[30px] rounded-[10px] mx-auto mt-[100px] gap-[20px] flex flex-col  items-center border-[1px] border-black ">
    <div class="border-[1px] border-black">
      <input
        type="number"
        v-model="num1"
        placeholder="Nhập số thứ nhất"
        class="w-[300px] h-[50px] p-3" />

    </div>
    <div class="border-[1px] border-black">
    <input
      type="number"
      v-model="num2"
      placeholder="Nhập số thứ hai"
      class="w-[300px] h-[50px] p-3" />
  </div>

    <p class="text-3xl ">Kết quả: </p>
    <p>Tổng:{{sum}} </p>
    <p>Hiệu:{{signal}} </p>
    <p>Tích:{{accumulation}}</p>
    <p>Thương:{{quotient  }} </p>

  </div>

</template>
