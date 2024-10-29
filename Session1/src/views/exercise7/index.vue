 <script>
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const fullname = ref('');
    const email = ref('');
    const phone = ref('');
    const password = ref('');
    const repassword = ref('');
    const formCompleteMessage = ref('');

    const isPasswordValid = computed(() => password.value.length >= 8);

    const isEmailValid = computed(() => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression cho email
      return emailPattern.test(email.value);
    });

    const isButtonDisabled = computed(() => {
      return !isPasswordValid.value || !isEmailValid.value || !fullname.value || !phone.value || !repassword.value;
    });

    watch([fullname, email, phone, password, repassword], () => {
      formCompleteMessage.value = '';
    });

    const handleSubmit = () => {
      if (isPasswordValid.value && isEmailValid.value) {
        formCompleteMessage.value = 'Form đã hoàn tất';
      }
    };

    return {
      fullname,
      email,
      phone,
      password,
      repassword,
      formCompleteMessage,
      isButtonDisabled,
      handleSubmit,
      isEmailValid,
    };
  },
};
</script>
<template>
  <div class="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md mt-[100px] h-screendsdsd">
    <h1 class="text-2xl font-semibold text-center mb-4">Đăng ký</h1>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="flex flex-col">
        <label for="fullname" class="text-lg font-medium">Họ tên:</label>
        <input type="text" v-model="fullname" id="fullname" class="border border-gray-300 p-2 rounded-md" />
      </div>

      <div class="flex flex-col">
        <label for="email" class="text-lg font-medium">Email:</label>
        <input type="email" v-model="email" id="email" class="border border-gray-300 p-2 rounded-md" />
        <p v-if="!isEmailValid" class="text-red-500 text-sm">Email không hợp lệ</p>
      </div>

      <div class="flex flex-col">
        <label for="phone" class="text-lg font-medium">Số điện thoại:</label>
        <input type="tel" v-model="phone" id="phone" class="border border-gray-300 p-2 rounded-md" />
      </div>

      <div class="flex flex-col">
        <label for="password" class="text-lg font-medium">Mật khẩu:</label>
        <input type="password" v-model="password" id="password" class="border border-gray-300 p-2 rounded-md" />
      </div>

      <div class="flex flex-col">
        <label for="repassword" class="text-lg font-medium">Nhập lại mật khẩu:</label>
        <input type="password" v-model="repassword" id="repassword" class="border border-gray-300 p-2 rounded-md" />
      </div>

      <button class="w-full"
        :class="[isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'] + ' text-white font-semibold py-2 rounded-md transition duration-200'"
        :disabled="isButtonDisabled"
        type="submit"
      >
        Đăng ký
      </button>
    </form>

    <p v-if="formCompleteMessage" class="mt-4 text-green-500 font-medium text-center">{{ formCompleteMessage }}</p>
  </div>
</template>
