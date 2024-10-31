<script>
import {ref} from "vue";

export default {
  setup() {
    const timeCountDown = ref("00:00:00");
    const setTimeCountDown = ref(0);
    const mess = ref('');
    let timer = null;

    const formatTime = (seconds) => {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const secs = String(seconds % 60).padStart(2, "0");
      return `${hrs}:${mins}:${secs}`;
    };

    const startCountdown = () => {
      mess.value = '';
      if(setTimeCountDown.value < 0){
        alert('Thời gian không hợp lệ!!!!!')

      }
      else {
        let totalSeconds = Number(setTimeCountDown.value);

        timeCountDown.value = formatTime(totalSeconds);

        if (timer) {
          clearInterval(timer);
        }

        timer = setInterval(() => {

          if (totalSeconds > 0) {

            totalSeconds--;
            timeCountDown.value = formatTime(totalSeconds);
          } else {
            clearInterval(timer);
            mess.value = 'Thời gian đến ngược kết thúc '
          }
        }, 1000);
      }
    };

    return {
      timeCountDown,
      setTimeCountDown,
      startCountdown,
      mess
    };
  },
};
</script>

<template>
  <div class="flex flex-col gap-[50px] justify-center items-center mt-[100px]">
    <h1 class="text-2xl font-bold">ĐỒNG HỒ ĐẾM NGƯỢC</h1>
    <div class="flex justify-center items-center">
      <p class="text-[16px]">Nhập thời gian đếm ngược:</p>
      <input v-model="setTimeCountDown" class="ml-[20px] w-[50px] border-[1px] border-black" type="number"/>
      <span>s</span>
      <button
        @click="startCountdown"
        class="text-[16px] font-medium w-[100px] h-[35px] bg-blue-700 hover:bg-blue-500 text-white rounded-[5px] ml-5"
      >
        Bắt đầu
      </button>
    </div>
    <p class="text-5xl font-bold">{{ timeCountDown }}</p>
    <p class="text-2xl font-bold text-red-600">{{ mess }}</p>
  </div>
</template>

<style scoped>
</style>
