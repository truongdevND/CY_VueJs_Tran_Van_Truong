<script>
export default {
  name: "ComponentInput",
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
};
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateValue"
    placeholder="Write your thoughts here..."
    class="block w-full p-4 text-black border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
  />
</template>

<style lang="scss" scoped>
</style>
