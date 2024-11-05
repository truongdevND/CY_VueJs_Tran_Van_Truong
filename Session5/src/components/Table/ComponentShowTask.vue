
<script>
export default {
  name: "TableShowTask",
  props:{
    filteredItems:{
      type: Array,
      required: true
    },


  },
  setup() {

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    return {
      formatDate
    }
  }
}
</script>
<template>
  <div class="mb-4">
    <h3 class="text-lg font-semibold mb-2 text-white">Selected Items:</h3>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
      <thead class="text-[16px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th class="px-6 py-3">STT</th>
        <th class="px-6 py-3">Task Name</th>
        <th class="px-6 py-3">Task Content</th>
        <th class="px-6 py-3">Status</th>
        <th class="px-6 py-3">Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in filteredItems"
          :key="item.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4">{{ item.id }}</td>
        <td class="px-6 py-4">{{ item.name }}</td>
        <td class="px-6 py-4">{{ item.content }}</td>
        <td class="px-6 py-4">
              <span :class="item.completed ? 'inline-flex items-center bg-green-100 text-green-800 font-medium px-3 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300' : 'inline-flex items-center bg-red-100 text-red-800 font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'">
                {{ item.completed ? 'Xong' : 'Chưa xong' }}
              </span>
        </td>
        <td class="px-6 py-4">{{ formatDate(item.deadline) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style  scoped>

</style>
