<script>
import {ref} from "vue";

export default {
  setup() {
    const arrayNote = ref([])
    const titleNote = ref('')
    const editingNote = ref(null)
    const editedTitle = ref('')

    const addNote = () => {
      if (!titleNote.value) return;

      const newTask = {
        id: arrayNote.value.length + 1,
        title: titleNote.value,
      };
      arrayNote.value = [...arrayNote.value, newTask];
      titleNote.value = '';
      saveToLocalStorage();
    }

    const deleteNote = (idTask) => {
      arrayNote.value = arrayNote.value.filter(task => task.id !== idTask);
      saveToLocalStorage();
    }

    const startEditing = (note) => {
      editingNote.value = note.id;
      editedTitle.value = note.title;
    }

    const saveEdit = () => {
      if (!editedTitle.value) return;

      const index = arrayNote.value.findIndex(note => note.id === editingNote.value);
      if (index !== -1) {
        arrayNote.value[index] = {
          ...arrayNote.value[index],
          title: editedTitle.value
        };
        saveToLocalStorage();
      }
      cancelEdit();
    }

    const cancelEdit = () => {
      editingNote.value = null;
      editedTitle.value = '';
    }

    const saveToLocalStorage = () => {
      localStorage.setItem('noteList', JSON.stringify(arrayNote.value));
    };

    const loadFromLocalStorage = () => {
      const note = localStorage.getItem('noteList');
      if (note) {
        arrayNote.value = JSON.parse(note);
      }
    };

    loadFromLocalStorage();

    return {
      arrayNote,
      deleteNote,
      titleNote,
      addNote,
      editingNote,
      editedTitle,
      startEditing,
      saveEdit,
      cancelEdit
    }
  }
}
</script>

<template>
  <div class="w-full min-h-[100vh] ">
    <h1 class="text-2xl font-bold text-center mb-[20px]">DANH SÁCH GHI CHÚ</h1>
    <div class="flex items-center justify-center mb-[20px]">
      <span class="text-[18px] font-medium mr-[10px]">Thêm mới ghi chú:</span>
      <input v-model="titleNote" class="bg-gray-100 border-b-[0.5px] border-black" type="text">
      <button @click="addNote"
              class="w-[100px] h-[30px] bg-red-400 hover:bg-red-600 text-white font-medium rounded-[5px] ml-[10px]">
        Thêm mới
      </button>
    </div>
    <ul class=" flex gap-[30px] ">
      <li v-for="item in arrayNote" :key="item.id"
          class="w-[300px] h-[300px] p-[10px] bg-gray-200 rounded-[10px] flex flex-col gap-[20px] mb-[10px]">
        <template v-if="editingNote !== item.id">
          <div class="flex justify-between px-[20px] gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="25"
                 height="25" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
              <g
                style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path
    d="M 89.011 87.739 c -0.599 -1.371 -1.294 -2.652 -1.968 -3.891 l -0.186 -0.343 l -15.853 -15.91 c -0.371 -0.375 -0.746 -0.748 -1.12 -1.12 c -0.671 -0.667 -1.342 -1.335 -1.997 -2.018 l -1.459 -1.437 l 23.316 -23.317 l -1.704 -1.704 c -9.111 -9.112 -22.925 -12.518 -35.353 -8.759 l -6.36 -6.359 c 0.769 -7.805 -2.017 -15.69 -7.503 -21.175 L 37.123 0 L 0 37.122 l 1.706 1.704 c 5.487 5.487 13.368 8.271 21.176 7.503 l 6.36 6.36 C 25.484 65.115 28.889 78.93 38 88.041 l 1.703 1.704 l 23.316 -23.316 l 1.438 1.458 c 0.679 0.653 1.344 1.321 2.009 1.989 c 0.373 0.374 0.745 0.748 1.117 1.116 l 15.699 15.7 l 0.566 0.352 c 1.239 0.673 2.52 1.369 3.891 1.968 L 90 90 L 89.011 87.739 z"
    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(175,0,0); fill-rule: nonzero; opacity: 1;"
    transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg>
            <div>
   <span @click="startEditing(item)" class="material-icons text-blue-500 hover:text-blue-600 cursor-pointer">
              edit
            </span>
              <span @click="deleteNote(item.id)" class="material-icons text-red-400 hover:text-red-600 cursor-pointer">
              delete
            </span>
            </div>

          </div>
          <div class="border-b-[0.5px] border-gray-500"></div>
          <p class="px-[20px] text-[16px] font-medium">{{ item.title }}</p>
        </template>

        <template v-else>
          <div class="px-[20px] flex flex-col items-center gap-2">
            <input
              v-model="editedTitle"
              class="flex-1 bg-gray-100 border-b-[0.5px] border-black p-1"
              type="text"
            >
            <div class="flex gap-[10px] justify-center items-center">
              <button @click="saveEdit" class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                Lưu
              </button>
              <button @click="cancelEdit" class="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
                Hủy
              </button>
            </div>

          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>
