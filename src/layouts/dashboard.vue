<script setup lang="ts">
import CommandPalette from "@/components/layout/dashboard/CommandPalette.vue";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/dashboard/AppSidebar.vue";
import Header from "@/components/layout/dashboard/Header.vue";

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
