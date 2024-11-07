<script>
export default {
  name: "ComponentItemProduct",
  props: {
    item: {
      type: Object,
      required: true
    }

  },
  setup(props, {emit}) {
    const formatMoney = (money) => {
      return `${money.toLocaleString()}`;
    }

    const toggle = (item) => {
      emit('add', item);
    }

    return {
      formatMoney,
      toggle
    }
  }
}

</script>

<template>
  <div
    class=" justify-between  w-[300px] min-h-[400px] transform duration-200 hover:scale-105 flex flex-col gap-[15px] h-auto p-[20px] rounded-[20px] bg-gray-100">
    <img class="w-full shadow-2xl rounded-[10px] h-[250px] object-cover" :src="item.thumbnail" alt="">
    <p class="text-2xl font-medium text-gray-800">{{ item.title }}</p>
    <p class="text-[24px] text-red-600 font-medium">{{ formatMoney(item.price) }} $</p>
    <p class="text-[14px]">{{ item.description }}</p>
    <button type="button" @click="toggle(item)"
            class="text-white bg-gradient-to-r w-full from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      Thêm vào giỏ hàng
    </button>
  </div>
</template>
<style lang="scss" scoped>

</style>
