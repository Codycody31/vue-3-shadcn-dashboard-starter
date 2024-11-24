<script setup lang="ts">
import { Heading } from "@/common/components/ui/heading";
import { Separator } from '@/common/components/ui/separator';
import PageContainer from "@/common/components/layout/PageContainer.vue";
import {Icon} from "@iconify/vue";
import { buttonVariants } from '@/common/components/ui/button';
import { cn } from '@/common/lib/utils';
import {ref} from "vue";
import EmployeeTableAction from "@/modules/employee/components/EmployeeTableAction.vue";
import {DataTableSkeleton} from "@/common/components/ui/data-table";

const totalUsers = ref(20);
</script>

<template>
  <PageContainer scrollable>
    <div class="space-y-4">
      <div class="flex items-start justify-between">
        <Heading
            :title="`Employee (${totalUsers})`"
            description="Manage employees (Server side table functionalities.)"
        />

        <RouterLink
            :class="cn(buttonVariants({ variant: 'default' }))"
            to="/dashboard/employee/new">
          <Icon icon="lucide:plus" class="mr-2 h-4 w-4"/>
          Add New
        </RouterLink>
      </div>
      <Separator/>
      <EmployeeTableAction />
      <Suspense
      >
<!--        <EmployeeListingPage/>-->

        <template #fallback>
          <DataTableSkeleton :column-count="6" :row-count="10"/>
        </template>
      </Suspense>
    </div>
  </PageContainer>
</template>
