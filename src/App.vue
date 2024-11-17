<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layouts = {
  dashboard: () => import('@/layouts/dashboard.vue'),
  blank: () => import('@/layouts/blank.vue'),
}

const resolvedLayout = ref(null)

watch(
  () => route.meta.layout,
  async (newLayout, oldLayout) => {
    const layoutName = newLayout || 'dashboard'
    const loadLayout = layouts[layoutName] || layouts.default
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
