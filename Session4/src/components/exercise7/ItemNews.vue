<script>
export default {
  name: 'itemNews',
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    emitNews() {
      this.$emit('item-clicked', { title: this.title, image: this.image });

    },
  },
};
</script>

<template>
  <div @click="emitNews">
    <img
      class="object-cover shadow-2xl w-full h-[200px] rounded-[10px] mb-[10px]"
      :src="image"
    />
    <p class="text-2xl ">{{ title }}</p>
  </div>
</template>


