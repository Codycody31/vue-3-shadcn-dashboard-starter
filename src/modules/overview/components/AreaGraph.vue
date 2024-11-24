<template>
  <Card>
    <CardHeader>
      <CardTitle>Area Chart - Stacked</CardTitle>
      <CardDescription>
        Showing total visitors for the last 6 months
      </CardDescription>
    </CardHeader>
    <CardContent>
      <AreaChart :data="chartData" index="month" :categories="['mobile', 'desktop']" :show-legend="false"
                 :y-formatter="() => {
            return '';
          }"
                 :curve-type="CurveType.Natural"
                 class="aspect-auto h-[310px] w-full"
      />
    </CardContent>
    <CardFooter>
      <div class="flex w-full items-start gap-2 text-sm">
        <div class="grid gap-2">
          <div class="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month
            <Icon icon="lucide:trending-up" class="h-4 w-4"/>
          </div>
          <div class="flex items-center gap-2 leading-none text-muted-foreground">
            January - June 2024
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>
<script setup lang="ts">
import {Icon} from "@iconify/vue";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/common/components/ui/card";
import {AreaChart} from '@/common/components/ui/chart-area'
import {CurveType} from "@unovis/ts";

const chartData = [
  {month: 'January', desktop: 186, mobile: 80},
  {month: 'February', desktop: 305, mobile: 200},
  {month: 'March', desktop: 237, mobile: 120},
  {month: 'April', desktop: 73, mobile: 190},
  {month: 'May', desktop: 209, mobile: 130},
  {month: 'June', desktop: 214, mobile: 140}
];
</script>
