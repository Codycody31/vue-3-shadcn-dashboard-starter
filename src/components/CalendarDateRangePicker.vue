<script setup lang="ts">
import { type Ref, ref } from "vue";
import { Button } from "@/components/ui/button";
import { RangeCalendar } from "@/components/ui/range-calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/vue";
import { format } from "date-fns";
import type { DateRange } from "radix-vue";
import { CalendarDate } from "@internationalized/date";

const start = new CalendarDate(2023, 0, 20)
const end = start.add({ days: 20 });

const date = ref({
	start,
	end,
}) as Ref<DateRange>;
</script>

<template>
	<div class="grid gap-2">
		<Popover>
			<PopoverTrigger asChild>
				<Button
					id="date"
					variant="outline"
					:class="cn(
			'w-[260px] justify-start text-left font-normal',
			!date && 'text-muted-foreground'
			)"
				>
					<Icon icon="lucide:calendar" class="mr-2 h-4 w-4" />
					<div v-if="!date" class="text-muted-foreground">Select Date Range</div>
					<div v-else-if="date.start && date.end">
						{{ format(date.start, "LLL dd, y") }} -
						{{ format(date.end, "LLL dd, y") }}
					</div>
					<div v-else>
						{{ format(date.end, "LLL dd, y") }}
					</div>
				</Button>
			</PopoverTrigger>
			<PopoverContent class="w-auto p-0" align="end">
				<RangeCalendar
					v-model="date"
					class="rounded-md border"
          numberOfMonths="2"
				/>
			</PopoverContent>
		</Popover>
	</div>
</template>
