<script>
import {productData} from "./data.js";
import {ref, computed} from "vue";

export default {
  name: "ProductList",
  setup() {
    const products = ref(productData);
    const selectedImage = ref({});
    const selectedColors = ref({});
    const isDivVisible = ref(false);
    const cart = ref([]);

    const cartTotal = computed(() =>
      cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    );

    const cartItemCount = computed(() =>
      cart.value.reduce((total, item) => total + item.quantity, 0)
    );

    const changeColor = (productId, color) => {
      selectedImage.value[productId] = products.value.find(
        product => product.id === productId
      ).classObject[color];
      selectedColors.value[productId] = color;
    };

    const resetImage = (productId) => {
      selectedImage.value[productId] = products.value.find(product => product.id === productId).image;
    };

    const isColorAvailable = (product, color) => {
      return product.quantity[color] >=0;
    };

    const canAddToCart = (product) => {
      const selectedColor = selectedColors.value[product.id];
      return selectedColor && product.quantity[selectedColor] > 0;
    };

    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split('-');
      return `ngày ${day} tháng ${month} năm ${year}`;
    };

    const formatMoney = (number) => {
      return `￥${number.toLocaleString()}`;
    };

    const toggleDiv = () => {
      isDivVisible.value = !isDivVisible.value;
    };

    const addToCart = (product) => {
      const selectedColor = selectedColors.value[product.id];
      if (!selectedColor || !canAddToCart(product)) {
        return;
      }

      const cartKey = `${product.id}-${selectedColor}`;
      const existingProduct = cart.value.find(item => item.cartKey === cartKey);

      // Check the available quantity for the selected color
      if (product.quantity[selectedColor] <= 0) {
        alert('Sản phẩm này không còn hàng!');
        return;
      }

      if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        if (existingProduct.quantity < product.quantity[selectedColor]) {
          existingProduct.quantity += 1;
          // Decrement the available quantity for the selected color
          product.quantity[selectedColor] -= 1;
        } else {
          alert('Đã đạt số lượng tối đa cho sản phẩm này!');
        }
      } else {
        // Add the new product to the cart
        cart.value.push({
          ...product,
          cartKey,
          selectedColor,
          quantity: 1,
          image: product.classObject[selectedColor] || product.image
        });
        // Decrement the available quantity for the selected color
        product.quantity[selectedColor] -= 1;
      }
    };
    const addTocart = (product) => {
      const selectedColor = selectedColors.value[product.id];
      if (!selectedColor || !canAddToCart(product)) {
        return;
      }
      const cartKey = `${product.id}-${selectedColor}`;
      const existingProduct = cart.value.find(item => item.cartKey === cartKey);

      if (product.quantity[selectedColor] < 0) {
        alert('Sản phẩm này không còn hàng!');
        console.log()
        return;
      }

      if (existingProduct) {
        if (existingProduct.quantity < product.quantity[selectedColor]) {
          existingProduct.quantity += 1;
          product.quantity[selectedColor] -= 1;
        } else {
          alert('Đã đạt số lượng tối đa cho sản phẩm này!');
        }
      } else {
        cart.value.push({
          ...product,
          cartKey,
          selectedColor,
          quantity: 1,
          image: product.classObject[selectedColor] || product.image
        });
        product.quantity[selectedColor] -= 1;
      }
    };


    const removeFromCart = (cartKey) => {
      const index = cart.value.findIndex(item => item.cartKey === cartKey);
      if (index !== -1) {
        cart.value.splice(index, 1);
      }
    };

    const updateQuantity = (cartItem, change) => {
      const product = products.value.find(p => p.id === cartItem.id);
      if (product) {
        const newQuantity = cartItem.quantity + change;
        if (newQuantity > 0 && newQuantity <= product.quantity[cartItem.selectedColor]) {
          cartItem.quantity = newQuantity;
        }
        if (newQuantity <= 0) {
          removeFromCart(cartItem.cartKey);
        }
      }
    };

    return {
      cart,
      products,
      isDivVisible,
      selectedImage,
      selectedColors,
      resetImage,
      cartTotal,
      cartItemCount,
      changeColor,
      formatDate,
      formatMoney,
      toggleDiv,
      addTocart,
      removeFromCart,
      updateQuantity,
      isColorAvailable,
      canAddToCart
    };
  },
};
</script>

<template>
  <div class="w-full h-auto p-[50px] bg-gray-100">
    <div class="flex justify-between items-center">
      <div class="flex w-full mx-auto gap-[50px] text-center">
        <p class="cursor-pointer hover:text-blue-600 transition-colors">
          Tất cả các sản phẩm
        </p>
      </div>

      <div class="relative cursor-pointer">
        <span @click="toggleDiv" class="material-icons text-[50px]">
          shopping_cart
        </span>
        <div
          class="absolute top-[-15px] right-0 w-[30px] h-[30px] flex justify-center items-center rounded-full bg-blue-700 font-medium text-white">
          {{ cartItemCount }}
        </div>

        <div v-if="isDivVisible"
             class="w-[400px] absolute z-[100] top-[60px] right-[40px] flex flex-col gap-[10px] h-auto p-[10px] rounded-[10px] bg-white shadow-lg">
          <h2 class="text-center text-2xl font-bold">Giỏ hàng</h2>
          <div class="border-b-[1px] border-gray-300"></div>

          <p v-if="cart.length === 0" class="text-center text-gray-500 py-4">
            Giỏ hàng trống
          </p>

          <ul v-else class="flex-col flex gap-2.5 max-h-[400px] overflow-y-auto">
            <li v-for="item in cart" :key="item.cartKey"
                class="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <div class="flex gap-2">
                <img :src="item.image" alt="" class="w-16 h-16 object-cover rounded"/>
                <div>
                  <p class="font-medium">{{ item.productName }}</p>
                  <p class="text-sm text-gray-600">
                    {{ formatMoney(item.price) }} -
                    <span class="capitalize">{{ item.selectedColor }}</span>
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button @click="updateQuantity(item, -1)"
                        class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                  -
                </button>
                <span class="w-8 text-center">{{ item.quantity }}</span>
                <button @click="updateQuantity(item, 1)"
                        class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                  +
                </button>
                <button @click="removeFromCart(item.cartKey)"
                        class="ml-2 text-red-500 hover:text-red-700">
                  <span class="material-icons">delete</span>
                </button>
              </div>
            </li>
          </ul>

          <div class="border-t-[1px] border-gray-300 mt-2 pt-2">
            <div class="flex justify-between items-center text-xl font-bold">
              <p>Tổng:</p>
              <p class="text-red-700">{{ formatMoney(cartTotal) }}</p>
            </div>
            <button
              class="w-full h-[40px] mt-2 rounded-[10px] bg-red-500 hover:bg-red-600 text-white text-[16px] transition-colors">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[50px]">
      <li v-for="item in products" :key="item.id"
          class="relative rounded-[20px] p-[20px] font-medium text-[16px] bg-white flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
        <p v-if="item.sold > 700"
           class="absolute top-0 left-0 rounded-full text-center p-3 h-[50px] bg-red-500 text-[16px] font-bold text-white">
          HOT</p>
        <p v-else
           class="absolute top-2 left-2 p-3 text-center rounded-full h-[50px] bg-blue-500 text-[16px] font-bold text-white">
          SLOW</p>

        <img class="w-full h-[500px] shadow-2xl object-cover rounded-[20px]"
             :src="selectedImage[item.id] || item.image"
             :alt="item.productName"/>

        <div class="mt-[20px] flex-col flex gap-[10px] px-[10px]">
          <p class="text-2xl font-bold">{{ item.productName }}</p>
          <div class="flex justify-between items-center">
            <span class="text-red-700 font-bold text-2xl">
              {{ formatMoney(item.price) }}
            </span>
            <span class="text-sm text-gray-600">
              Còn lại: {{ selectedColors[item.id] ? item.quantity[selectedColors[item.id]] : 0 }} chiếc
            </span>
          </div>
          <p class="text-sm text-gray-600">Đã bán: {{ item.sold }} chiếc</p>
          <p>Nhãn hàng: <span class="font-bold text-green-600">{{ item.brand }}</span></p>
          <p class="text-sm">Ngày phát hành: {{ formatDate(item.releaseDate) }}</p>
          <div>
            <p class="mb-2">Màu sắc:</p>
            <div class="flex gap-[10px]">
              <div v-for="color in item.colorOption" :key="color"
                   class="relative border-black border-[1px] w-[40px] h-[40px] rounded-full cursor-pointer transition-opacity"
                   @click="isColorAvailable(item, color) && changeColor(item.id, color)"
                   :style="{ backgroundColor: color }">
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold mb-2">Mô tả sản phẩm</p>
            <p class="text-gray-600">{{ item.content }}</p>
          </div>

          <button @click="addTocart(item)"
                  :disabled="!canAddToCart(item)"
                  class="w-full h-[50px] text-white font-bold text-xl mt-[30px] rounded-[10px] transition-colors"
                  :class="canAddToCart(item) ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'">
            {{ selectedColors[item.id] ? 'Thêm vào giỏ hàng' : 'Vui lòng chọn màu' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
