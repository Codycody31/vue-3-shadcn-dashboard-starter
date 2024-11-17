<script setup lang="ts">
import {computed} from "vue";
import {useRoute} from "vue-router";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useUserStore} from "@/stores";
import navItems from "@/navigation";
import {Icon} from "@iconify/vue";

const route = useRoute();
const pathname = computed(() => route.path);

const company = {
  name: 'Acme Inc',
  logo: "lucide:gallery-vertical-end",
  plan: 'Enterprise'
};
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <div class="flex gap-2 py-2 text-sidebar-accent-foreground">
        <div
            class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
        >
          <Icon :icon="company.logo" class="size-4"/>
        </div>
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ company.name }}</span>
          <span class="truncate text-xs">{{ company.plan }}</span>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent class="overflow-x-hidden">
      <SidebarGroup>
        <SidebarGroupLabel>Overview</SidebarGroupLabel>
        <SidebarMenu>
          <template v-for="item in navItems" :key="item.title">
            <Collapsible
                v-if="item.items && item.items.length > 0"
                asChild
                :defaultOpen="item.isActive"
                class="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                      :tooltip="item.title"
                      :isActive="pathname === item.url"
                  >
                    <Icon :icon="item.icon"/>
                    <span>{{ item.title }}</span>
                    <Icon
                        icon="lucide:chevron-right"
                        class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <template
                        v-for="subItem in item.items"
                        :key="subItem.title"
                    >
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                            asChild
                            :isActive="pathname === subItem.url"
                        >
                          <RouterLink :to="subItem.url">
                            <Icon :icon="subItem.icon"/>
                            <span>{{ subItem.title }}</span>
                          </RouterLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </template>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>

            <!-- Single Menu Item -->
            <SidebarMenuItem v-else>
              <SidebarMenuButton
                  asChild
                  :tooltip="item.title"
                  :isActive="pathname === item.url"
              >
                <RouterLink :to="item.url">
                  <Icon :icon="item.icon"/>
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </template>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar class="h-8 w-8 rounded-lg">
                  <AvatarImage
                      :src="useUserStore().user?.image ?? ''"
                      :alt="useUserStore().user?.name ?? ''"
                  />
                  <AvatarFallback class="rounded-lg">
                    {{
                      useUserStore().user?.name?.slice(0, 2)?.toUpperCase() ||
                      "CN"
                    }}
                  </AvatarFallback>
                </Avatar>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-semibold">
                    {{ useUserStore().user?.name }}
                  </span>
                  <span class="truncate text-xs">
                    {{ useUserStore().user?.email }}
                  </span>
                </div>
                <Icon icon="lucide:chevrons-up-down" class="ml-auto size-4"/>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
            >
              <DropdownMenuLabel class="p-0 font-normal">
                <div
                    class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                >
                  <Avatar class="h-8 w-8 rounded-lg">
                    <AvatarImage
                        :src="useUserStore().user?.image ?? ''"
                        :alt="useUserStore().user?.name ?? ''"
                    />
                    <AvatarFallback class="rounded-lg">
                      {{
                        useUserStore().user?.name?.slice(0, 2)?.toUpperCase() ||
                        "CN"
                      }}
                    </AvatarFallback>
                  </Avatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">
                      {{ useUserStore().user?.name }}
                    </span>
                    <span class="truncate text-xs">
                      {{ useUserStore().user?.email }}
                    </span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator/>

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Icon icon="lucide:settings"/>
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="lucide:credit-card"/>
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon icon="lucide:bell"/>
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>
                <Icon icon="lucide:log-out"/>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail/>
  </Sidebar>
</template>
