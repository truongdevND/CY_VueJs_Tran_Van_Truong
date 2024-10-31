<script >
export default {
  name: "CheckItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isCheck: {
      type: Boolean,
      required: true,
    }
  }
}

</script>

<template>
  <div class=" ml-[50px]">
    <h3 class="text-2xl font-bold ">{{ title }}</h3>
    <div class="border-b-[1px] border-black"></div>
    <p>{{ description }}</p>
    <p>{{ price }}</p>
    <p>{{ isCheck ? 'Đã xác nhận' : 'Chưa xác nhận' }}</p>

  </div>
</template>

