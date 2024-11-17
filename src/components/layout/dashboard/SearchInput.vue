<script setup lang="ts">
import {Button} from '@/components/ui/button';
import {Icon} from "@iconify/vue";
import {useUiStore} from "@/stores";
</script>

<template>
  <div class="w-full space-y-2">
    <Button
        variant="outline"
        class="relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        @click="useUiStore().commandPalette.isOpen = true"
    >
      <Icon icon="lucide:search" class="mr-2 h-4 w-4"/>
      Search...
    </Button>
  </div>
</template>
