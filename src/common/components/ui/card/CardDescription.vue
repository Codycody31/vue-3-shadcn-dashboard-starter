<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/common/lib/utils.ts'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
