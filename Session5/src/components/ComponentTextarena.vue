<script>
export default {
  name: "ComponentTextarena",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },

  setup(props, { emit }) {
    const updateValue = (event) => {
      emit("update:modelValue", event.target.value);
    };

    return { updateValue };
  }
}
</script>

<template>

    <textarea

      :value="modelValue"
      @input="updateValue"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."></textarea>

</template>

<style  scoped>
</style>
