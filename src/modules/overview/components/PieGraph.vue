<template>
  <Card class="flex flex-col">
    <CardHeader class="items-center pb-0">
      <CardTitle>Pie Chart - Donut with Text</CardTitle>
      <CardDescription>January - June 2024</CardDescription>
    </CardHeader>
    <CardContent class="flex-1 pb-0">
      <DonutChart
          index="name"
          :category="'total'"
          :data="chartData"
          :type="'donut'"
          class="mx-auto aspect-square max-h-[360px] my-10"
      />
    </CardContent>
    <CardFooter class="flex-col gap-2 text-sm">
      <div class="flex items-center gap-2 font-medium leading-none">
        Trending up by 5.2% this month
        <Icon icon="lucide:trending-up" class="h-4 w-4"/>
      </div>
      <div class="leading-none text-muted-foreground">
        Showing total visitors for the last 6 months
      </div>
    </CardFooter>
  </Card>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/common/components/ui/card";
import {DonutChart} from "@/common/components/ui/chart-donut";
const chartData = [
  { name: 'chrome', total: 275 },
  { name: 'safari', total: 200 },
  { name: 'firefox', total: 287 },
  { name: 'edge', total: 173 },
  { name: 'other', total: 190 }
];
</script>
