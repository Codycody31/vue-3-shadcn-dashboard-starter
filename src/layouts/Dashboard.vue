<script setup lang="ts">
import CommandPalette from "@/common/components/layout/dashboard/CommandPalette.vue";
import {SidebarInset, SidebarProvider} from "@/common/components/ui/sidebar";
import AppSidebar from "@/common/components/layout/dashboard/AppSidebar.vue";
import Header from "@/common/components/layout/dashboard/Header.vue";

const defaultOpen = document.cookie.includes("sidebar:state=true");
</script>

<template>
  <CommandPalette/>
  <SidebarProvider :defaultOpen="defaultOpen">
    <AppSidebar/>
    <SidebarInset>
      <Header/>
      <router-view/>
    </SidebarInset>
  </SidebarProvider>
</template>
