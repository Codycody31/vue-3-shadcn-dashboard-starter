<script setup lang="ts">
import { ref, computed, defineProps } from 'vue';
import { Badge } from '@/common/components/ui/badge';
import { Button } from '@/common/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/common/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/common/components/ui/popover';
import { Separator } from '@/common/components/ui/separator';
import {Icon} from "@iconify/vue";

interface FilterOption {
  value: string;
  label: string;
  icon?: any;
}

interface FilterBoxProps {
  filterKey: string;
  title: string;
  options: FilterOption[];
  setFilterValue: (
      value: string | null,
      options?: Record<string, any>
  ) => void;
  filterValue: string;
}

// Props
const props = defineProps<FilterBoxProps>();

// Reactive state
const selectedValuesSet = computed(() => {
  if (!props.filterValue) return new Set<string>();
  const values = props.filterValue.split('.');
  return new Set(values.filter((value) => value !== ''));
});

const handleSelect = (value: string) => {
  const newSet = new Set(selectedValuesSet.value);
  if (newSet.has(value)) {
    newSet.delete(value);
  } else {
    newSet.add(value);
  }
  props.setFilterValue(Array.from(newSet).join('.') || null);
};

const resetFilter = () => props.setFilterValue(null);
</script>

<template>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" class="border-dashed">
        <Icon icon="lucide:circle-plus" class="mr-2 h-4 w-4" />
        {{ title }}
        <template v-if="selectedValuesSet.size > 0">
          <Separator orientation="vertical" class="mx-2 h-4" />
          <Badge variant="secondary" class="rounded-sm px-1 font-normal lg:hidden">
            {{ selectedValuesSet.size }}
          </Badge>
          <div class="hidden space-x-1 lg:flex">
            <template v-if="selectedValuesSet.size > 2">
              <Badge variant="secondary" class="rounded-sm px-1 font-normal">
                {{ selectedValuesSet.size }} selected
              </Badge>
            </template>
            <template v-else>
              <Badge
                  v-for="value in Array.from(selectedValuesSet)"
                  :key="value"
                  variant="secondary"
                  class="rounded-sm px-1 font-normal"
              >
                {{
                  options.find((option) => option.value === value)?.label || value
                }}
              </Badge>
            </template>
          </div>
        </template>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0" align="start">
      <Command>
        <CommandInput :placeholder="title" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
                v-for="option in options"
                :value="option.value"
                @click="handleSelect(option.value)"
            >
              <div
                  class="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary"
                  :class="{
                  'bg-primary text-primary-foreground': selectedValuesSet.has(
                    option.value
                  ),
                  'opacity-50 [&_svg]:invisible': !selectedValuesSet.has(
                    option.value
                  )
                }"
              >
                <Icon icon="lucide:check" class="h-4 w-4" aria-hidden="true" />
              </div>
              <component
                  v-if="option.icon"
                  :is="option.icon"
                  class="mr-2 h-4 w-4 text-muted-foreground"
                  aria-hidden="true"
              />
              <span>{{ option.label }}</span>
            </CommandItem>
          </CommandGroup>
          <template v-if="selectedValuesSet.size > 0">
            <CommandSeparator />
            <CommandGroup>
              <CommandItem @click="resetFilter" class="justify-center text-center">
                Clear filters
              </CommandItem>
            </CommandGroup>
          </template>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
