

<script>
export default {
  name: "Item",
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
    productCode: {
      type: String,
      required: true,
    },
    isCheck: {
      type: Boolean,
      required: true,
    }

  },
  methods: {
    emitProductCode() {
      this.$emit("item-selected",this.productCode);

    },
  },
  mounted() {
    console.log(`Item "${this.title}" đã được tạo.`);
  },

};

</script>
<template>
  <div class=" ml-[50px] mb-[50px] ">
    <h3 class="text-2xl font-bold ">{{ title }}</h3>
    <div class="border-b-[1px] border-black"></div>
    <p>{{ description }}</p>
    <p>{{ price }}</p>
    <button class="cursor-pointer  h-[40px] p-3 rounded-[5px] bg-red-500 text-white text-[14px] font-bold" :disabled="isCheck" @click="emitProductCode">Xác nhận sản phẩm</button>


  </div>
</template>
<style scoped>
button:disabled {
background-color: #ccc;
cursor: not-allowed;
}
</style>
