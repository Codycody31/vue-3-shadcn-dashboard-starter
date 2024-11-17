<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useBreadcrumbs } from "@/lib/breadcrumbs";
import {Icon} from "@iconify/vue";

const items = useBreadcrumbs();
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in items" :key="item.title">
        <!-- Render all but the last item with a link -->
        <BreadcrumbItem
          v-if="index !== items.length - 1"
          class="hidden md:block"
        >
          <BreadcrumbLink
            ><RouterLink :to="item.link">{{
              item.title
            }}</RouterLink></BreadcrumbLink
          >
        </BreadcrumbItem>

        <!-- Separator -->
        <BreadcrumbSeparator
          v-if="index < items.length - 1"
          class="hidden md:block"
        >
          <Icon icon="lucide:slash" class="w-4 h-4" />
        </BreadcrumbSeparator>

        <!-- Render the last item as a page -->
        <BreadcrumbPage v-else>
          {{ item.title }}
        </BreadcrumbPage>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
