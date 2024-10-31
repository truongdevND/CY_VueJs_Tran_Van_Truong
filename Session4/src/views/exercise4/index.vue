<script >
import {computed,watch, ref} from "vue";

export default {
  setup(){
    const textEmail = ref('')
    const textPassword = ref('')
    const textName = ref('');
    const errorText = ref('');

    const isPasswordValid = computed(() => textPassword.value.length >= 8);

    const checkEmail = computed(()=>{
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (textEmail.value){
        return emailPattern.test(textEmail.value);
      }
      return true;

    })
    watch([textEmail, textPassword, textName], () => {
      errorText.value = '';
    });
    const checkValueText = computed(() => {
      return !textEmail.value || !textPassword.value || !textName.value || !checkEmail.value || !isPasswordValid.value;
    });
    const handleSubmit = ()=>{
      if(isPasswordValid.value && checkEmail.value  ){
        errorText.value = 'Form hoàn tất';
      }else {
        errorText.value = 'Vui lòng nhập đầy đủ các trường';
      }
    }

    return {
      textName,
      textEmail,
      textPassword,
      checkEmail,
      handleSubmit,
      errorText,
      checkValueText
    }
  }
}
</script>

<template>

  <div class="relative w-[500px] h-auto p-[50px] mx-auto rounded-[20px] flex flex-col gap-[50px] justify-center items-center border-[1px] border-black mt-[50px]">
    <h1 class="w-full text-center text-2xl font-bold  ">ĐĂNG KÍ</h1>
    <form  @submit.prevent="handleSubmit" class="flex flex-col gap-[30px] w-[90%] ">
      <label class="flex  gap-2.5  justify-between">
        <p class="text-[18px] font-bold">Tên Đăng Nhập:</p>
        <input v-model="textName" class="border-black border-[1px] h-[30px]" type="text">
      </label>
      <label class="relative flex  gap-2.5 justify-between">
        <p class="text-[18px] font-bold">Email:</p>
        <input v-model="textEmail" class="border-black border-[1px]  h-[30px]" type="text">
        <p v-if="!checkEmail" class="absolute bottom-[-24px] right-[36px] text-red-700">Email Không hợp lệ!!!</p>
      </label>
      <label class="flex  gap-2.5 justify-between">
        <p class="text-[18px] font-bold">Password:</p>
        <input v-model="textPassword" class="border-black border-[1px]  h-[30px]" type="password">
      </label>
      <button class="text-2xl font-bold text-white  mt-[20px]  w-full h-[50px] rounded-[10px]"
              :disabled="checkValueText"
              :class="[checkValueText ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'] + ' text-white font-semibold py-2 rounded-md transition duration-200'"
      >SUBMIT</button>
    </form>
    <p v-if="errorText" class="absolute bottom-[15px] right-[40%] text-[16px] text-red-700 ">{{errorText}}</p>

  </div>

</template>

<style scoped>

</style>
