<script setup lang="ts">
import {DataTableResetFilter, DataTableFilterBox, DataTableSearch} from "@/common/components/ui/data-table";
import {useProductTableFilters, CATEGORY_OPTIONS} from "@/modules/product/hooks/useProductTableFilters";

const {
  searchQuery,
  setSearchQuery,
  categoriesFilter,
  setCategoriesFilter,
  setPage,
  resetFilters,
  isAnyFilterActive
} = useProductTableFilters();
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <DataTableSearch
        searchKey="name"
        :searchQuery="searchQuery"
        :setSearchQuery="setSearchQuery"
        :setPage="setPage"
    />
    <DataTableFilterBox
        filterKey="categories"
        title="Categories"
        :options="CATEGORY_OPTIONS"
        :setFilterValue="setCategoriesFilter"
        :filterValue="categoriesFilter"
    />
    <DataTableResetFilter :is-filter-active="isAnyFilterActive" @reset="resetFilters" />
  </div>
</template>
