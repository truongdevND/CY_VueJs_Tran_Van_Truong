<script>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const newsDetail = ref(JSON.parse(route.query.newsData));
    console.log(newsDetail.value);

    return {
      newsDetail
    };
  }
}
</script>

<template>
 <div class="max-w-[1600px] mx-auto h-auto flex flex-col px-[100px] justify-center items-center text-center ">

     <h1 class=" my-[50px] text-5xl font-bold ">{{ newsDetail.title }}</h1>
     <img class="w-[600px] h-auto object-cover" :src="newsDetail.image_url" :alt="newsDetail.title">
     <p class="font-bold text-2xl">{{ newsDetail.description }}</p>
     <a class="text-[24px] my-[20px] hover:text-red-600 " :href="newsDetail.link" target="_blank">Đọc toàn bộ bài viết</a>
 </div>
</template>
