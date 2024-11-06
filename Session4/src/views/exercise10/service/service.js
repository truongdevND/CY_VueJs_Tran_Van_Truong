import axiosInstance from "@/views/exercise10/service/axios.js";


function get(endpoint, params) {
  return axiosInstance.get(endpoint, { params })
}

export { get }

