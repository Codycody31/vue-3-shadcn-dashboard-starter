import { computed } from 'vue';
import { useRoute } from 'vue-router';

export function useBreadcrumbs() {
  const route = useRoute();

  // Define custom route mappings
  const routeMapping = {
    '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
    '/dashboard/employee': [
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'Employee', link: '/dashboard/employee' }
    ],
    '/dashboard/product': [
      { title: 'Dashboard', link: '/dashboard' },
      { title: 'Product', link: '/dashboard/product' }
    ]
    // Add more custom mappings as needed
  };

  // Compute breadcrumbs
  const breadcrumbs = computed(() => {
    const pathname = route.path;

    // Check if there's a custom mapping for the exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // Fallback: Generate breadcrumbs dynamically from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path
      };
    });
  });

  return breadcrumbs;
}
