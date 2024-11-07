
<script>
import { onMounted, ref } from "vue";
import ComponentItemProduct from "@/views/exercise12/component/ComponentItemProduct.vue";
import { cartService } from "@/views/exercise12/service/cartService.js";
import {useCartStore} from "@/views/exercise12/store/cartStore.js";
import {useProductStore} from "@/views/exercise12/store/cartStore.js";

import componentDialogCart from "@/views/exercise12/component/ComponentDialogCart.vue";


export default {
  name: "exercise12",
  components: {
    ComponentItemProduct,
    componentDialogCart
  },
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const productList = ref([]);
    const dialogCart = ref(false);

    const fetchData = async () => {
      const resp = await cartService.getData();
      productList.value = resp.data.products;
    };

    onMounted(() => {
      fetchData();
    });

    const displayCart = () => {
      dialogCart.value = !dialogCart.value;
    };

    return {
      productList,
      cartStore,
      displayCart,
      dialogCart
    };
  }
};
</script>
<template>
  <div class="p-[50px]">
    <div class="flex">
      <h1 class="w-full text-center text-3xl font-bold">DANH SÁCH SẢN PHẨM</h1>
      <div class="relative cursor-pointer" >
        <svg @click="displayCart" class="hover:opacity-60" height="60px" width="60px" version="1.1" id="Layer_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 512 512" xml:space="preserve">
            <circle style="fill:#324A5E;" cx="256" cy="256" r="256"/>
          <path style="fill:#2B3B4E;" d="M505.661,312.823L338.008,145.17l-1.205,2.755l-56.442-56.442l0,0l-48.495,7.068v65.064
	        l-44.534,66.239l-39.869,164.559L264.88,511.829C382.781,507.809,480.446,424.076,505.661,312.823z"/>
          <path style="fill:#FFD15D;" d="M355.433,398.222H156.567c-7.652,0-13.605-6.651-12.76-14.257l25.591-230.322
	        c0.722-6.503,6.218-11.421,12.76-11.421h147.684c6.542,0,12.038,4.92,12.76,11.421l25.591,230.321
	        C369.038,391.571,363.086,398.222,355.433,398.222z"/>
          <path style="fill:#F9B54C;" d="M368.193,383.966l-25.591-230.322c-0.722-6.503-6.218-11.421-12.76-11.421h-73.554v256h99.145
	        C363.086,398.222,369.038,391.571,368.193,383.966z"/>
          <path style="fill:#FC6F58;" d="M293.064,176.269h-17.239V119.38c0-10.931-8.894-19.825-19.825-19.825
	        c-10.931,0-19.825,8.894-19.825,19.825v56.889h-17.239V119.38c0-20.437,16.627-37.064,37.064-37.064s37.064,16.627,37.064,37.064
	         V176.269z"/>
          <path style="fill:#F1543F;" d="M256.286,82.33v17.239c10.799,0.157,19.539,8.976,19.539,19.811v56.889h17.239V119.38
	        C293.064,99.04,276.592,82.487,256.286,82.33z"/>
        </svg>
        <p class="absolute top-[-10px] right-[-10px] bg-blue-600 rounded-full w-[30px] h-[30px] text-center text-white font-medium">
          {{ cartStore.cartList.length }}
        </p>
        <componentDialogCart v-if="dialogCart" class="w-[400px] absolute z-[100] top-[55px] right-[40px] flex flex-col gap-[10px] p-[10px] rounded-[10px] bg-white shadow-2xl"/>
      </div>
    </div>

    <div class="w-[90%] flex-wrap flex gap-[20px] mx-auto">
      <ComponentItemProduct v-for="item in productList" :key="item.id" :item="item" @add="cartStore.addToCart(item)"/>
    </div>
  </div>
</template>

