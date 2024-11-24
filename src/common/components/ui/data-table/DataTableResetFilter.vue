<script setup lang="ts">
import { Button } from '@/common/components/ui/button';
type DataTableResetFilterProps = {
  isFilterActive: boolean;
};

const props = defineProps<DataTableResetFilterProps>();
const emit = defineEmits(['reset']);
</script>

<template>
  <Button variant="outline" v-if="props.isFilterActive" @click="emit('reset')">
    Reset Filters
  </Button>
</template>
