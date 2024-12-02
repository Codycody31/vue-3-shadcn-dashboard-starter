<script setup lang="ts">
import {Button} from '@/common/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/common/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/common/components/ui/alert-dialog'
import {Icon} from "@iconify/vue";
import {useRouter} from "vue-router";
import {defineProps, ref} from 'vue';

const router = useRouter();
const props = defineProps<{
  data: any;
}>();

const loading = ref(false);
const open = ref(false);
</script>

<template>
  <!-- Fix clicking outside of it, not working -->
  <AlertDialog :open="open">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
        <AlertDialogAction @click="open = false">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  <DropdownMenu :modal="false">
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" class="h-8 w-8 p-0">
        <span class="sr-only">Open menu</span>
        <Icon icon="lucide:more-horizontal" class="h-4 w-4"/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>

      <DropdownMenuItem @click="router.push(`/dashboard/product/${props.data.id}`)">
        <Icon icon="lucide:edit" class="h-4 w-4"/>
        Update
      </DropdownMenuItem>
      <DropdownMenuItem @click="open = true">
        <Icon icon="lucide:trash" class="h-4 w-4"/>
        Delete
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
