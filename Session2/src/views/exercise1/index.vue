<script>
export default {
  data() {
    return {
      cart: [],
      products: [
        {
          id: 1,
          name: "PS5",
          price: 5555,
          publicDate: "05-05-2021",
          image: "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
          hot: true,
        },
        {
          id: 2,
          name: "PS4",
          price: 4444,
          publicDate: "04-04-2021",
          image: "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
          hot: true,
        },
        {
          id: 3,
          name: "PS3",
          price: 3333,
          publicDate: "03-03-2021",
          image: "https://haloshop.vn/image/cache/catalog/products/may-game/sony-playstation/ps3-slim-45-700x700.jpg",
          hot: false,
        },
      ],
      paymentMethods: [
        {text: "COD", value: 1},
        {text: "Banking", value: 2},
        {text: "Ứng dụng bên thứ 3", value: 3},
      ],
      selectedPayment: 2,
    };
  },
  computed: {
    hotProducts() {
      return this.products.filter((product) => product.hot);
    },
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      alert(`${product.name} đã được thêm vào giỏ hàng!`);
    },
    onPaymentMethodChange() {
      const selected = this.paymentMethods.find((method) => method.value === this.selectedPayment);
      alert(`Phương thức thanh toán đã thay đổi thành: ${selected.text}`);
    },
  },
};
</script>
<template>
  <div class="relative w-full h-full bg-gray-100 p-[50px]">
    <h1 class=" w-full text-center text-3xl font-bold">Danh sách sản phẩm</h1>
    <ul class="flex gap-[30px] mt-[50px] justify-center items-center ">
      <li v-for="product in products" :key="product.id"
          class="flex flex-col gap-[10px] w-[400px] h-auto rounded-[30px] p-[20px] bg-white">
        <img :src="product.image" :alt="product.name" class="w-full h-[300px] object-cover rounded-[20px] shadow-2xl "/>
        <h3 class="text-2xl font-bold ">{{ product.name }}</h3>
        <p class="text-[16px] ">Giá: {{ product.price }}</p>
        <p class="text-[16px] ">Ngày ra mắt: {{ product.publicDate }}</p>
        <p class="text-[16px] text-red-600  " v-if="product.price > 4000">Sản phẩm đắt</p>
        <p class="text-[16px]  text-green-600 " v-else>Sản phẩm rẻ</p>
        <button class="text-[18px] h-[50px]  text-white font-bold w-[100%] mx-auto bg-red-500 rounded-[10px]"
                @click="addToCart(product)">Thêm vào giỏ hàng
        </button>
      </li>
    </ul>

    <h1 class=" w-full text-center text-3xl font-bold mt-[50px]">Sản phẩm hot</h1>
    <ul class="flex gap-[30px] mt-[50px] justify-center items-center ">
      <li v-for="product in hotProducts" :key="product.id"
          class="flex flex-col gap-[10px] w-[400px] h-auto rounded-[30px] p-[20px] bg-white">
        <img :src="product.image" :alt="product.name" class="w-full h-[300px] object-cover rounded-[20px] shadow-2xl "/>
        <h3 class="text-2xl font-bold ">{{ product.name }}</h3>
        <p class="text-[16px] ">Giá: {{ product.price }}</p>
        <p class="text-[16px] ">Ngày ra mắt: {{ product.publicDate }}</p>
        <p class="text-[16px] text-red-600  " v-if="product.price > 4000">Sản phẩm đắt</p>
        <p class="text-[16px]  text-green-600 " v-else>Sản phẩm rẻ</p>
        <button class="text-[18px] h-[50px]  text-white font-bold w-[100%] mx-auto bg-red-500 rounded-[10px]"
                @click="addToCart(product)">Thêm vào giỏ hàng
        </button>
      </li>
    </ul>

<div class="flex flex-col gap-[30px] mt-[50px]  justify-center items-center ">
  <h2 class=" w-full text-center text-2xl font-bold">Phương thức thanh toán</h2>
  <select class="w-[400px] h-[50px] border-black border-[1px]" v-model="selectedPayment" @change="onPaymentMethodChange">
    <option v-for="method in paymentMethods" :key="method.value" :value="method.value">
      {{ method.text }}
    </option>
  </select>
</div>
  </div>
</template>
