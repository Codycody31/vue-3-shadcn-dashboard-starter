<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layouts = {
  dashboard: () => import('@/layouts/Dashboard.vue'),
  blank: () => import('@/layouts/Blank.vue'),
}

const resolvedLayout = ref(null)

watch(
  () => route.meta.layout,
  async (newLayout, oldLayout) => {
    const layoutName = newLayout || 'dashboard'
    const loadLayout = layouts[layoutName.toLowerCase()] || layouts.default
    resolvedLayout.value = (await loadLayout()).default
  },
  { immediate: true }
)
</script>

<template>
	<component :is="resolvedLayout">
		<router-view />
	</component>
</template>
