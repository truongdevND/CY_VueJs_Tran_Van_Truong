import axiosInstance from "@/views/exercise11/service/axios.js";


function get(endpoint) {
  return axiosInstance.get(endpoint)
}

export { get }

