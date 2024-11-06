import { get } from './service.js'


function getData() {
  return get('/users')
}

export const userService = {

  getData,
}
