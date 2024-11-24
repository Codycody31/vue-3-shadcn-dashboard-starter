<script setup lang="ts">
import {DataTableResetFilter, DataTableFilterBox, DataTableSearch} from "@/common/components/ui/data-table";
import {useEmployeeTableFilters, GENDER_OPTIONS} from "@/modules/employee/hooks/useEmployeeTableFilters";

const {
  searchQuery,
  setSearchQuery,
  genderFilter,
  setGenderFilter,
  setPage,
  resetFilters,
  isAnyFilterActive
} = useEmployeeTableFilters();
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
        filterKey="gender"
        title="Gender"
        :options="GENDER_OPTIONS"
        :setFilterValue="setGenderFilter"
        :filterValue="genderFilter"
    />
    <DataTableResetFilter :is-filter-active="isAnyFilterActive" @reset="resetFilters" />
  </div>
</template>
