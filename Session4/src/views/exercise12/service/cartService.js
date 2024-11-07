import { get } from './service.js'


function getData() {
  return get('/products')
}

export const cartService = {

  getData,
}
