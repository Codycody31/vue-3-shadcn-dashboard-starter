<script lang="ts" setup>
import {ref, computed} from 'vue';
import {
  FlexRender,
  useVueTable,
  type ColumnDef,
  type PaginationState,
  getCoreRowModel,
  getPaginationRowModel
} from '@tanstack/vue-table';
import {Icon} from "@iconify/vue";
import {ScrollArea, ScrollBar} from "@/common/components/ui/scroll-area";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/common/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/common/components/ui/select'
import {Button} from "@/common/components/ui/button";

// Props
interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  totalItems: number;
  pageSizeOptions?: number[];
}

const props = defineProps<DataTableProps<any>>();
const {columns, data, totalItems, pageSizeOptions = [10, 20, 30, 40, 50]} = props;

// State
const currentPage = ref(1);
const pageSize = ref(10);

// Computed Properties
const paginationState = computed(() => ({
  pageIndex: currentPage.value - 1,
  pageSize: pageSize.value,
}));

const pageCount = computed(() => Math.ceil(totalItems / pageSize.value));

// Methods
const handlePaginationChange = (updaterOrValue:
                                    | PaginationState
                                    | ((old: PaginationState) => PaginationState)
) => {
  const newPaginationState = typeof updaterOrValue === 'function'
      ? updaterOrValue(paginationState.value)
      : updaterOrValue;

  currentPage.value = newPaginationState.pageIndex + 1;
  pageSize.value = newPaginationState.pageSize;
};

// Table Instance
const table = useVueTable({
  get data() {
    return data;
  },
  columns,
  pageCount: pageCount.value,
  state: {
    pagination: paginationState.value,
  },
  onPaginationChange: handlePaginationChange,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  manualPagination: true,
  manualFiltering: true
});
</script>

<template>
  <div class="space-y-4">
    <ScrollArea class="grid h-[calc(80vh-220px)] rounded-md border md:h-[calc(90dvh-240px)]">
      <Table class="relative">
        <TableHeader>
          <TableRow
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
          >
            <TableHead
                v-for="header in headerGroup.headers"
                :key="header.id"
                class="px-4 py-2"
            >
              <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows.length">
            <TableRow
                v-for="row in table.getRowModel().rows"
                :key="row.id"
                :data-state="row.getIsSelected() ? 'selected' : null"
            >
              <TableCell
                  v-for="cell in row.getVisibleCells()"
                  :key="cell.id"
                  class="px-4 py-2"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                  />
              </TableCell>
            </TableRow>
          </template>
          <tr v-else>
            <td :colspan="columns.length" class="h-24 text-center">
              No results.
            </td>
          </tr>
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>

    <div class="flex flex-col items-center justify-end gap-2 space-x-2 py-4 sm:flex-row">
      <div class="flex w-full items-center justify-between">
        <div class="flex-1 text-sm text-muted-foreground">
          <template v-if="totalItems > 0">
            Showing
            {{
              paginationState.pageIndex * paginationState.pageSize + 1
            }}
            to
            {{
              Math.min(
                  (paginationState.pageIndex + 1) * paginationState.pageSize,
                  totalItems
              )
            }}
            of {{ totalItems }} entries
          </template>
          <template v-else>
            No entries found
          </template>
        </div>
        <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
          <div class="flex items-center space-x-2">
            <p class="whitespace-nowrap text-sm font-medium">Rows per page</p>
            <Select
                :value="paginationState.pageSize"
                :onValueChange="(value: number) => table.setPageSize(value)"
            >
              <SelectTrigger class="h-8 w-[70px]">
                <SelectValue :placeholder="`${paginationState.pageSize}`"/>
              </SelectTrigger>
              <SelectContent side="top">
                <SelectItem v-for="pageSize in pageSizeOptions" :key="pageSize" :value="`${pageSize}`">
                  {{ pageSize }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div class="flex w-full items-center justify-between gap-2 sm:justify-end">
        <div class="flex w-[150px] items-center justify-center text-sm font-medium">
          <template v-if="totalItems > 0">
            Page {{ paginationState.pageIndex + 1 }} of {{ pageCount }}
          </template>
          <template v-else>No pages</template>
        </div>
        <div class="flex items-center space-x-2">
          <Button
              aria-label="Go to first page"
              variant="outline"
              class="hidden h-8 w-8 p-0 lg:flex"
              :disabled="!table.getCanPreviousPage()"
              @click="table.setPageIndex(0)"
          >
            <Icon icon="radix-icons:double-arrow-left" class="h-4 w-4" aria-hidden="true"/>
          </Button>
          <Button
              aria-label="Go to previous page"
              variant="outline"
              class="h-8 w-8 p-0"
              :disabled="!table.getCanPreviousPage()"
              @click="table.previousPage()"
          >
            <Icon icon="lucide:chevron-left" class="h-4 w-4" aria-hidden="true"/>
          </Button>
          <Button
              aria-label="Go to next page"
              variant="outline"
              class="h-8 w-8 p-0"
              :disabled="!table.getCanNextPage()"
              @click="table.nextPage()"
          >
            <Icon icon="lucide:chevron-right" class="h-4 w-4" aria-hidden="true"/>
          </Button>
          <Button
              aria-label="Go to last page"
              variant="outline"
              class="hidden h-8 w-8 p-0 lg:flex"
              :disabled="!table.getCanNextPage()"
              @click="table.setPageIndex(pageCount - 1)"
          >
            <Icon icon="radix-icons:double-arrow-right" class="h-4 w-4" aria-hidden="true"/>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
