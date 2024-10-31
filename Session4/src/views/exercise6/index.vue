<script>
import axios from 'axios';
import {ref} from "vue";

export default {

  setup() {
    const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';
    const setMoney = ref(0);
    const convertMoney = ref(0);
    const selectedCurrency = ref('VND');
    const rates = ref({});

    function restAPI() {
      axios.get(apiURL)
        .then(res => {
           rates.value = res.data.rates;
        })
        .catch(err => {
          console.log(err);
        })
    }

    const handleSubmit = () =>{
    if (selectedCurrency.value) {
      convertMoney.value = setMoney.value * rates.value[selectedCurrency.value];
    }

    }
    restAPI();
    return {
      selectedCurrency,
      rates,
      setMoney,
      convertMoney,
      handleSubmit
    }
  }
}

</script>

<template>
  <div class="flex flex-col gap-[50px] justify-center items-center mt-[100px]">
    <h1 class="text-2xl font-bold">ĐỔI TIỀN TỆ</h1>
    <div class="flex justify-center items-center">
      <p class="text-[16px]">Nhập số tiền cần quy đổi:</p>
      <input  v-model="setMoney" class="ml-[20px] w-[50px] border-[1px] border-black" type="number"/>
      <span>USD </span>
      <span> = </span>
      <span class="mx-[20px]">   {{ convertMoney }}  </span>
      <select v-model="selectedCurrency " class=" border-[1px] border-black">
        <option v-for="(rate, currency) in rates" :key="currency" :value="currency">
          {{ currency }}
        </option>
      </select>
    </div>
    <button
      @click="handleSubmit"
      class="text-[16px] font-medium w-[100px] h-[35px] bg-blue-700 hover:bg-blue-500 text-white rounded-[5px] ml-5"
    >
      Submit
    </button>


  </div>
</template>

<style scoped>

</style>
