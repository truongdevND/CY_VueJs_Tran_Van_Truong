import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 15000,
})

axiosInstance.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {

      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem('token')}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  response => {
    if (response.data.status === 401 || response.data.status === 403) {
      alert('Ban vui long dang nhap')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
