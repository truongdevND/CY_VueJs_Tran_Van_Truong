<template>
  <div class="w-full h-auto p-[50px]">
    <div class="flex justify-center gap-[20px] w-full">
      <button class="h-[30px] bg-blue-600 rounded-[5px] mr-[10px] text-white text-[16px] p-1 font-medium" @click="switchComponent('Component1')">
        Component A
      </button>
      <button class="h-[30px] bg-blue-600 rounded-[5px] mr-[10px] text-white text-[16px] p-1 font-medium" @click="switchComponent('Component2')">
        Component B
      </button>
      <button class="h-[30px] bg-blue-600 rounded-[5px] mr-[10px] text-white text-[16px] p-1 font-medium" @click="switchComponent('Component3')">
        Component C
      </button>
    </div>

    <component class="w-[700px] max-h-[700px] mx-auto mt-[50px]" :is="currentComponent">
      <template v-if="currentComponent === 'Component1'">
        <p class="text-center text-3xl font-bold ">Hello my Friend!!!!!</p>
      </template>
      <template v-else-if="currentComponent === 'Component2'">
        <img  src="https://thuvienmeme.com/wp-content/uploads/2024/05/meme-ho-beo-chi-tay-may-coi-chung-tao.jpg" alt="Example image for Component 2" />
      </template>
      <template v-else-if="currentComponent === 'Component3'">
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"  controls >
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </template>
    </component>
  </div>
</template>

<script>
import Component1 from "@/views/exercise13/component/Component1.vue";
import Component2 from "@/views/exercise13/component/Component2.vue";
import Component3 from "@/views/exercise13/component/Component3.vue";
import { ref } from "vue";

export default {
  name: "exercise13",
  components: {
    Component1,
    Component2,
    Component3
  },
  setup() {
    const currentComponent = ref("Component1");
    const switchComponent = (component) => {
      currentComponent.value = component;
    };

    return {
      switchComponent,
      currentComponent
    };
  }
};
</script>
