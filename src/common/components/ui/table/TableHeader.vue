<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/common/lib/utils.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot />
  </thead>
</template>
