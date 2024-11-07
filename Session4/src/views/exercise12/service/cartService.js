import { get } from './service.js'


function getData() {
  return get('/products')
}
function getDataCategory() {
  return get('products/categories')
}

export const cartService = {

  getData,
  getDataCategory
}
