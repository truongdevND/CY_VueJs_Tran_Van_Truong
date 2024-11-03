<template>
    <VueDatePicker v-model="date"  placeholder="Select date"/>
</template>

<script >
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  name: 'componentDatePicker',
  components: {
    VueDatePicker
  },
  setup(){
    const date = ref();

    return{

      date
    }


  }
}

</script>
