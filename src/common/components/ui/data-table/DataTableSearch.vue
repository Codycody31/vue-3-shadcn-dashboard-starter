<script setup lang="ts">
import {Input} from '@/common/components/ui/input';
import {cn} from '@/common/lib/utils';
import { Options } from 'nuqs';
import { defineProps, ref, nextTick } from 'vue';

interface DataTableSearchProps {
  searchKey: string;
  searchQuery: string;
  setSearchQuery: (
      value: string | ((old: string) => string | null) | null,
      options?: Options<any> | undefined
  ) => Promise<URLSearchParams>;
  setPage: <Shallow>(
      value: number | ((old: number) => number | null) | null,
      options?: Options<Shallow> | undefined
  ) => Promise<URLSearchParams>;
}

const props = defineProps<DataTableSearchProps>()

const isLoading = ref(false);

const startTransition = async (callback: () => void) => {
  isLoading.value = true;
  await nextTick();
  try {
    callback();
  } finally {
    isLoading.value = false;
  }
};
const handleSearch = (value: string) => {
  props.setSearchQuery(value, { startTransition });
  props.setPage(1)
}
</script>

<template>
  <Input
      :placeholder="`Search ${props.searchKey}...`"
      :value="props.searchQuery ?? ''"
      @update:model-value="handleSearch"
      :class="cn('w-full md:max-w-sm', isLoading && 'animate-pulse')"
      :disabled="isLoading"
  />
</template>
