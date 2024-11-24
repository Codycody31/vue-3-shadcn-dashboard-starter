<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: '',
  description: '',
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold tracking-tight">{{title}}</h2>
    <p class="text-sm text-muted-foreground">{{description}}</p>
  </div>
</template>
