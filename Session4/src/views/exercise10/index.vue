<script>
import {ref} from "vue";
import {weatherService} from "@/views/exercise10/service/weaherService.js";

export default {
  name: "exercise10",
  setup() {
    const weatherData = ref(null);
    const textSearchCity = ref("");
    const errorText = ref("Please enter city name !!!!");

    const fetchData = async (city) => {
      try {
        const res = await weatherService.getData(city);
        weatherData.value = res.data;

      } catch (error) {
        weatherData.value = null;
        errorText.value = "No city data found!!!!";
        console.error("Error fetching weather:", error);
      }
    };
    const handleSearch = async () => {
      if (textSearchCity.value.trim()) {
        await fetchData(textSearchCity.value)
      }
    }

    const getWeatherIcon = (weatherCode) => {
      const iconMap = {
        '01n': './image/sun.png',
        '02n': './image/cloudy.png',
        '03n': './image/cloudy.png',
        '04n': './image/cloudy.png',
        '09n': './image/rain.png',
        '10n': './image/rain.png',
        '11n': './image/storm.png',
        '13n': './image/snow.png',
        '50n': './image/mist.png',
      }
      console.log(iconMap[weatherCode]);
      return iconMap[weatherCode] || './image/sun.png'
    }
    console.log(getWeatherIcon());

    return {
      textSearchCity,
      weatherData,
      handleSearch,
      getWeatherIcon,
      errorText

    };
  },
};
</script>

<template>
  <div
    class=" overflow-hidden  bg-cover  text-center"
    style="background-image: url('./image/img2.jpg'); height: 100vh">
    <div
      class=" h-full w-full overflow-hidden  "
      style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="flex h-full mt-[100px] justify-center">
        <div class="rounded-[20px] w-[500px] h-auto">
          <form @submit.prevent="handleSearch(textSearchCity)">
            <label for="default-search"
                   class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input v-model="textSearchCity" type="search" id="default-search"
                     class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Enter city name" required/>
              <button type="submit"
                      class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button>
            </div>
          </form>
          <div v-if="weatherData">
            <b class="w-full  text-center text-[70px] text-white font-bold"> {{ weatherData.name }},
              {{ weatherData.sys.country }}</b>
            <img class="w-[150px] h-[150px] mx-auto mt-[20px]" :src="getWeatherIcon(weatherData.weather[0].icon)"
                 :alt="weatherData.weather[0].description"/>
            <p class="w-full text-center text-[60px] text-white font-bold">
              {{ weatherData.main.temp.toFixed(0) }} ℃
            </p>
            <p class="w-full text-center text-[50px] text-white font-bold">
              {{ weatherData.weather[0].main }}
            </p>
            <div>
              <div class="mt-4 grid grid-cols-2 gap-4 text-white">
                <div>
                  <p class="text-gray-300">Humidity</p>
                  <p class="text-xl">{{ weatherData.main.humidity }}%</p>
                </div>
                <div>
                  <p class="text-gray-300">Wind Speed</p>
                  <p class="text-xl">{{ weatherData.wind.speed }} m/s</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="w-full text-center text-[30px] text-white font-bold">{{ errorText }}</p>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
