import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export  const useProductStore = defineStore('product',() => {
  const productList = ref([]);

  return {productList}
});

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([]);
  const addToCart = (item) => {
    const existingItem = cartList.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartList.value.push({ ...item, quantity: 1 });
    }
  };

  const updateQuantity = (itemId, change) => {
    const item = cartList.value.find(cartItem => cartItem.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        removeFromCart(itemId);
      }
    }
  };

  const removeFromCart = (itemId) => {
    cartList.value = cartList.value.filter(item => item.id !== itemId);
  };

  const totalPrice = computed(() => {
    return cartList.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  });

  return { cartList, addToCart, updateQuantity, removeFromCart, totalPrice };
});
