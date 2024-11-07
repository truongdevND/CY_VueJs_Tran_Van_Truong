<script>
import {highlightDirective} from "@/views/exercise15/vdirective/vhighlight.js";
import {zoomDirective} from "@/views/exercise15/vdirective/vzoom.js";

export default {
  directives: {
    highlight: highlightDirective,
    zoom: zoomDirective
  },
  setup() {
    return {}
  }
}
</script>
<template>
  <div class="flex w-full h-[1000px] justify-center items-center">
    <p v-highlight v-zoom class="text-4xl font-bold cursor-pointer">Hello my Friend!!!!!!</p>
  </div>

</template>

<style scoped>
</style>
