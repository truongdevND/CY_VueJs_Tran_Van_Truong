<script>
import ComponentButton from "@/components/Button/ComponentButtonDelete.vue";
import ComponentTable from  "@/components/ComponentTable.vue";
import ComponentSearch from "@/components/ComponentSearch.vue";
import ComponentDropdown  from "@/components/ComponentDropdown.vue";
import ComponentButtonAddTask from "@/components/Button/ComponentAddTask.vue"
import ComponentRadio from "@/components/ComponentRadio.vue"
import DialogAddTask from "@/components/ComponentDialogAddTask.vue"
import {data} from "@/data/data.js";
export default {
  name: 'Session5',
  computed: {
    data() {
      return data
    }
  },
  components: {
    ComponentButton,
    ComponentTable,
    ComponentSearch,
    ComponentDropdown,
    ComponentButtonAddTask,
    ComponentRadio,
    DialogAddTask

  },
  setup() {

    return {

    }
  }
}
</script>
<template>
    <div class="relative overflow-y-hidden shadow-md sm:rounded-lg p-[50px] dark:bg-gray-900">
      <h1 class="text-center text-4xl text-white font-bold my-[10px]">TODO LIST</h1>
      <div class=" h-[100vh]  ">
        <DialogAddTask/>
        <ComponentButtonAddTask class="flex mb-[20px] justify-end"/>
        <div class="flex mb-[30px] justify-between px-[20px]">
          <ComponentDropdown/>
          <ComponentRadio/>
          <ComponentSearch />
        </div>

        <ComponentTable :data="data.todos"/>
      </div>
    </div>
</template>



<style lang="scss" scoped>

</style>
