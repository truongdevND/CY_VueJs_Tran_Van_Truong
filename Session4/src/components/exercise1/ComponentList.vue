<script>
import Item from "./ComponentItem.vue";
import CheckItem from "./ComponentCheckItem.vue";
import fa from "vue-tailwind/dist/l10n/fa.js";

export default {
  name: "List",
  components: {
    Item,
    CheckItem,
  },
  data() {
    return {
      items: [
        { title: "Item 1", description: "Sản phẩm 1",price:"1000",isCheck: true, productCode: "SP001" },
        { title: "Item 2", description: "Sản phẩm 2",price:"2000",isCheck: false , productCode: "SP002" },
        { title: "Item 3", description: "Sản phẩm 3",price:"3000",isCheck: false , productCode: "SP003" },
      ],
    };
  },
  methods: {
    handleProductSelection(code) {
     alert(`Mã sản phẩm đã chọn: ${code}`);
      const selectedItem = this.items.find(item => item.productCode === code);
      if (selectedItem) {
        selectedItem.isCheck = true;
      }
    },
  },

};
</script>
<template>
  <div class="flex justify-center items-center  mt-[100px] ">
    <div class="flex flex-col gap-4" v-for="(item, index) in items" :key="index">
      <Item :title="item.title" :description="item.description" :isCheck="item.isCheck" :price="item.price"  @product-selected="handleProductSelection(item.productCode)" />
      <CheckItem :title="item.title" :isCheck="item.isCheck" :price="item.price" :description="item.description"  />
    </div>
  </div>
</template>
