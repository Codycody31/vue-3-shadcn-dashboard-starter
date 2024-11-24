<template>
    <PageContainer scrollable>
      <div class="space-y-2">
        <div class="flex items-center justify-between space-y-2">
          <h2 class="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div class="hidden items-center space-x-2 md:flex">
             <CalendarDateRangePicker />
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" class="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" class="space-y-4">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle class="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <Icon icon="lucide:dollar-sign" class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">$45,231.89</div>
                  <p class="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle class="text-sm font-medium">
                    Subscriptions
                  </CardTitle>
                  <Icon icon="lucide:users" class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">+2350</div>
                  <p class="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle class="text-sm font-medium">Sales</CardTitle>
                  <Icon icon="lucide:credit-card" class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">+12,234</div>
                  <p class="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle class="text-sm font-medium">
                    Active Now
                  </CardTitle>
                  <Icon icon="lucide:activity" class="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div class="text-2xl font-bold">+573</div>
                  <p class="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div class="col-span-4">
                 <BarGraph />
              </div>
              <Card class="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
              <div class="col-span-4">
                 <AreaGraph />
              </div>
              <div class="col-span-4 md:col-span-3">
                 <PieGraph />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
</template>

<script setup>
import PageContainer from '@/common/components/layout/PageContainer.vue'
import CalendarDateRangePicker	from '@/common/components/CalendarDateRangePicker.vue'
import RecentSales from '@/modules/overview/components/RecentSales.vue'
import BarGraph from '@/modules/overview/components/BarGraph.vue'
import AreaGraph from '@/modules/overview/components/AreaGraph.vue'
import PieGraph from '@/modules/overview/components/PieGraph.vue'
// import { RecentSales } from './recent-sales';
import { Button } from '@/common/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/common/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/common/components/ui/tabs';
import {Icon} from "@iconify/vue";
</script>
