    import axios from 'axios'

    const axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_API_URL, //endpoint api
      timeout: 15000, //timeout request
    })

    axiosInstance.interceptors.request.use(
      config => {
        // Do something before request is sent
        return config
      },
      error => {
        // Do something with request error
        return Promise.reject(error)
      },
    )

    axiosInstance.interceptors.response.use(
      response => {
        // Do something with response data
        return response
      },
      error => {
        // Do something with response error
        return Promise.reject(error)
      },
    )

    export default axiosInstance
