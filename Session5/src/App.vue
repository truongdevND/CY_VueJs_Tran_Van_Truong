
<script>
import Session5 from "./views/index.vue";
import ComponentButton from "@/components/Button/ComponentButtonDelete.vue";
export default {
  components: {ComponentButton, Session5},
  setup() {


    return {
      Session5,
      ComponentButton
    }
  }
}
</script>
<template>
  <div>
    <Session5/>
  </div>
</template>


<style lang="scss" scoped>

</style>
