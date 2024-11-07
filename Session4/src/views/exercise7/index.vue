<script>
import itemNews from "../../components/exercise7/ItemNews.vue";
import axios from "axios";
import { ref,  } from "vue";
import { useRouter } from 'vue-router';


export default {
  name: "exercise7",
  components: {
    itemNews
  },
  setup() {
    const apiURL = 'https://newsdata.io/api/1/latest?country=vi&category=top&apikey=pub_578492cbfb906a39a04d7f6e724dfe4e2faa1';
    const datas = ref([]);
    const router = useRouter();


    function restAPI() {
      axios.get(apiURL)
        .then(res => {
          datas.value = res.data.results;
        })
        .catch(err => {
          console.log(err);
        });
    }

      restAPI();
    function handleItemClick(news) {
      router.push({
        name: 'NewsDetail',
        query: {newsData: JSON.stringify(news)},
      });
    }


    return {
      datas,
      handleItemClick
    };
  }
};
</script>

<template>
  <div>
    <h1 class="w-full text-4xl font-bold text-center mt-[30px]">TIN TỨC MỚI NHẤT</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-[50px] w-full h-auto">

      <div
        class="w-full p-[20px] rounded-[20px] h-auto cursor-pointer"
        v-for="(data, index) in datas"
        :key="index"
      >
        <itemNews class="transform hover:scale-105 transition duration-300 hover:text-2xl hover:font-medium hover:text-blue-500"
                  :title="data.title"
                  :image="data.image_url"
                  @item-clicked="handleItemClick(data)"
        />
      </div>
    </div>
  </div>

</template>

