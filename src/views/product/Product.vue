<script setup lang="ts">
import {Heading} from "@/common/components/ui/heading";
import {Separator} from '@/common/components/ui/separator';
import PageContainer from "@/common/components/layout/PageContainer.vue";
import {Icon} from "@iconify/vue";
import {buttonVariants} from '@/common/components/ui/button';
import {cn} from '@/common/lib/utils';
import {DataTableSkeleton} from "@/common/components/ui/data-table";
import ProductListingPage from "@/modules/product/components/ProductListingPage.vue";
import ProductTableAction from "@/modules/product/components/ProductTableAction.vue";
</script>

<template>
  <PageContainer>
    <div class="space-y-4">
      <div class="flex items-start justify-between">
        <Heading
            title="Products"
            description="Manage products (Server side table functionalities.)"
        />
        <RouterLink
            to="/dashboard/product/new"
            :class="cn(buttonVariants(), 'text-xs md:text-sm')"
        >
          <Icon icon="lucide:plus" class="mr-2 h-4 w-4"/>
          Add New
        </RouterLink>
      </div>
      <Separator/>
            <ProductTableAction />
      <Suspense
      >
        <ProductListingPage/>

        <template #fallback>
          <DataTableSkeleton :column-count="5" :row-count="10"/>
        </template>
      </Suspense>
    </div>
  </PageContainer>
</template>
