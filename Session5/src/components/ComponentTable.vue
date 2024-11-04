<script>
import ComponenCheckbox from "@/components/ComponenCheckbox.vue";
import ComponentButtonDelete from "@/components/Button/ComponentButtonDelete.vue";
import ComponentButtonEdit from "@/components/Button/ComponentButtonEdit.vue";



import {ref, computed,watch } from "vue";

export default {
  name: "ComponentTable",
  components: {
    ComponenCheckbox,
    ComponentButtonDelete,
    ComponentButtonEdit
  },
  props: {
    data: {
      type: Array,
      required: true
    }

  },
  setup(props,{emit}) {

    const datas = ref(props.data);
    const currentPage = ref(1);
    const itemsPerPage = ref(5);

    const selectedItems = ref(new Set());
    const isAllSelected = ref(false);



    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return props.data.slice(start, end);
    });


    const totalPages = computed(() => {
      return Math.ceil(datas.value.length / itemsPerPage.value);
    });


    watch(
      () => props.data,
      (newData) => {
        datas.value = newData;
        if (currentPage.value > 1 && paginatedData.value.length === 0) {
          currentPage.value--;
        }
        if (newData.length > 0 && currentPage.value === totalPages.value) {
          currentPage.value = totalPages.value;
        }
      },
      { immediate: true }
    );

    const goToPage = (page) => {
      currentPage.value = page;

    };

    const toggleSelectAll = (checked) => {
      isAllSelected.value = checked;
      if (checked) {
        paginatedData.value.forEach(item => {
          selectedItems.value.add(item.id);
        });
      } else {
        paginatedData.value.forEach(item => {
          selectedItems.value.delete(item.id);
        });
      }
    };

    const toggleSelectItem = (itemId, checked) => {
      if (checked) {
        selectedItems.value.add(itemId);
      } else {
        selectedItems.value.delete(itemId);
        isAllSelected.value = false;
      }

      isAllSelected.value = paginatedData.value.every(item => selectedItems.value.has(item.id));
    };



    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    const handleEdit = (item) => {
      emit('edit-task', item);
    };
    const handleDelete = (itemId) => {
      emit('delete-task', itemId);
    };

    return {
      currentPage,
      itemsPerPage,
      paginatedData,
      totalPages,
      goToPage,
      formatDate,
      toggleSelectItem,
      toggleSelectAll,
      selectedItems,
      isAllSelected,
      handleEdit,
      handleDelete
    };
  }
};
</script>

<template>
  <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-[16px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          <ComponenCheckbox
            :checked="isAllSelected"
            @change="toggleSelectAll"
         />
        </th>
        <th scope="col" class="px-6 py-3">STT</th>
        <th scope="col" class="px-6 py-3">Task Name</th>
        <th scope="col" class="px-6 py-3">Task Content</th>
        <th scope="col" class="px-6 py-3">Status</th>
        <th scope="col" class="px-6 py-3">Date</th>
        <th scope="col" class="px-6 py-3">Action</th>


      </tr>
      </thead>
      <tbody>
      <tr
        v-for="item in paginatedData"
        :key="item.id"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-6">
          <ComponenCheckbox
            :checked="selectedItems.has(item.id)"
            @change="(checked) => toggleSelectItem(item.id, checked)"/>
        </td>
        <td class="w-4 p-6">{{ item.id }}</td>
        <td class="w-4 p-6 ">{{ item.name }}</td>
        <td class="w-4 p-6 ">{{ item.content }}</td>

        <td class="w-4 p-6"
        >
           <span  :class="item.completed ? 'inline-flex items-center bg-green-100 text-green-800  font-medium px-3 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300' : 'inline-flex items-center bg-red-100 text-red-800 font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'">  {{ item.completed ? 'Xong' : 'Chưa xong' }}</span>
         </td>
        <td class="w-4 p-6">{{formatDate(item.deadline) }}</td>
        <td class="w-4 p-6">
          <ComponentButtonEdit @click="handleEdit(item)"/>
          <ComponentButtonDelete  @click="handleDelete(item.id)"/>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="flex justify-center mt-4">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="['px-3 py-1 mx-1 rounded', page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200']"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
