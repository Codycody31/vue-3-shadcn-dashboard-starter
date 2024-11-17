<template>
  <ScrollArea v-if="scrollable" class="h-[calc(100dvh-52px)]">
    <div class="h-full p-4 md:px-6">
      <slot />
    </div>
  </ScrollArea>
  <div v-else class="h-full p-4 md:px-6">
    <slot />
  </div>
</template>

<script setup>
import { ScrollArea } from "@/components/ui/scroll-area";
import { defineProps } from "vue";

// Define props for the component
defineProps({
  scrollable: {
    type: Boolean,
    default: true,
  },
});
</script>
