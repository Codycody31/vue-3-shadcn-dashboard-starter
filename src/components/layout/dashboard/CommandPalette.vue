<script setup lang="ts">
import {useUiStore} from "@/stores";
import {useMagicKeys} from '@vueuse/core'
import {watch} from 'vue'

const keys = useMagicKeys()
const CmdK = keys['Ctrl+Shift+K']

function handleOpenChange() {
  console.log('handleOpenChange')
  useUiStore().commandPalette.isOpen = !useUiStore().commandPalette.isOpen
}

watch(CmdK, (v) => {
  if (v)
    handleOpenChange()
})

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import {Icon} from "@iconify/vue";
</script>

<template>
  <CommandDialog :open="useUiStore().commandPalette.isOpen" @update:open="handleOpenChange">
    <CommandInput placeholder="Type a command or search..."/>
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Calendar">
          <Icon icon="lucide:calendar" class="mr-2 h-4 w-4"/>
          <span>Calendar</span>
        </CommandItem>
        <CommandItem value="Search Emoji">
          <Icon icon="lucide:smile" class="mr-2 h-4 w-4"/>
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem value="Calculator">
          <Icon icon="lucide:calculator" class="mr-2 h-4 w-4"/>
          <span>Calculator</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator/>
      <CommandGroup heading="Settings">
        <CommandItem value="Profile">
          <Icon icon="lucide:user" class="mr-2 h-4 w-4"/>
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem value="Billing">
          <Icon icon="lucide:credit-card" class="mr-2 h-4 w-4"/>
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem value="Settings">
          <Icon icon="lucide:settings" class="mr-2 h-4 w-4"/>
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
