<template>
  <picture>
    <source
        v-for="(src, index) in sources"
        :key="index"
        :srcset="src.srcset"
        :type="src.type"
    />
    <img
        :src="src"
        :alt="alt"
        :class="imageClass"
        :loading="lazy ? 'lazy' : 'eager'"
        style="position: absolute; height: 100%; width: 100%; inset: 0; color: transparent;"
        sizes="100vw"
    />
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    sources: {
      type: Array,
      default: () => [],
    },
    imageClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
