
<script>
export default {
 props:{
   checked:{
     type:Boolean,
     default: false
   }
 }
}
</script>
<template>
  <div class="flex items-center">
    <input id="checkbox-table-search-1" type="checkbox" :checked="checked" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
  </div>
</template>


<style lang="scss" scoped>

</style>
