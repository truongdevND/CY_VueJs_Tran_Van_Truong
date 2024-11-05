import axiosInstance from '@/services/Axios.js'

function post(endpoint, data) {
  return axiosInstance.post(endpoint, data)
}

function get(endpoint, data) {
  return axiosInstance.get(endpoint)
}

function del(endpoint) {
  return axiosInstance.delete(endpoint)
}

function put(endpoint, data) {
  return axiosInstance.put(endpoint, data)
}

export { post, get, del, put }
``
