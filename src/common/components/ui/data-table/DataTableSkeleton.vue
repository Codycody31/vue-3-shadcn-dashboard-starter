<script setup lang="ts">
import {Skeleton} from '@/common/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/common/components/ui/table';
import {ScrollArea, ScrollBar} from '@/common/components/ui/scroll-area';

interface DataTableSkeletonProps {
  columnCount?: number;
  rowCount?: number;
  searchableColumnCount?: number,
  filterableColumnCount?: number,
  showViewOptions?: boolean
}

const props = withDefaults(defineProps<DataTableSkeletonProps>(), {
  columnCount: 1,
  rowCount: 10,
  searchableColumnCount: 0,
  filterableColumnCount: 0,
  showViewOptions: false
})
</script>

<template>
  <div class="w-full space-y-3 overflow-auto">
    <div class="flex w-full items-center justify-between space-x-2 overflow-auto p-1"
         v-if="props.searchableColumnCount > 0 || props.filterableColumnCount > 0">
      <div class="flex flex-1 items-center space-x-2 space-y-4">
        <Skeleton v-for="n in props.searchableColumnCount" :key="n" class="h-10 w-[70px] border-dashed"/>
        <Skeleton v-if="props.filterableColumnCount > 0" v-for="n in props.filterableColumnCount" :key="n"
                  class="h-10 w-[70px] border-dashed"/>
      </div>
      <Skeleton v-if="props.showViewOptions" class="ml-auto hidden h-7 w-[70px] lg:flex"/>
    </div>
    <div class="rounded-md border">
      <ScrollArea class="h-[calc(80vh-220px)] rounded-md border  md:h-[calc(90dvh-220px)]">
        <Table>
          <TableHeader>
            <TableRow v-for="n in 1" :key="n" class="hover:bg-transparent">
              <TableHead v-for="n in props.columnCount" :key="n">
                <Skeleton class="h-8 w-full"/>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="n in props.rowCount" :key="n" class="hover:bg-transparent">
              <TableCell v-for="n in props.columnCount" :key="n">
                <Skeleton class="h-8 w-full"/>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </div>
    <div class="flex w-full flex-col items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row sm:gap-8">
      <div class="flex-1">
        <Skeleton class="h-8 w-40"/>
      </div>
      <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        <div class="flex items-center space-x-2">
          <Skeleton class="h-8 w-24"/>
          <Skeleton class="h-8 w-[70px]"/>
        </div>
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          <Skeleton class="h-8 w-20"/>
        </div>
        <div class="flex items-center space-x-2">
          <Skeleton class="hidden size-8 lg:block"/>
          <Skeleton class="size-8"/>
          <Skeleton class="size-8"/>
          <Skeleton class="hidden size-8 lg:block"/>
        </div>
      </div>
    </div>
  </div>
</template>
