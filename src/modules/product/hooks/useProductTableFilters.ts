import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const CATEGORY_OPTIONS = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Furniture', label: 'Furniture' },
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Toys', label: 'Toys' },
    { value: 'Groceries', label: 'Groceries' },
    { value: 'Books', label: 'Books' },
    { value: 'Jewelry', label: 'Jewelry' },
    { value: 'Beauty Products', label: 'Beauty Products' }
];

export function useProductTableFilters() {
    const router = useRouter();
    const route = useRoute();

    // Reactive state with default values
    const searchQuery = ref<string>(route.query.q as string || '');
    const categoriesFilter = ref<string>(route.query.categories as string || '');
    const page = ref<number>(route.query.page ? parseInt(route.query.page as string, 10) : 1);

    // Watchers to update the URL when state changes
    const updateQuery = (newParams: Record<string, any>) => {
        console.log('newParams', newParams);
        router.push({
            query: {
                ...route.query,
                ...newParams
            }
        });
    };

    watch(searchQuery, (newValue) => {
        updateQuery({ q: newValue || null });
    });

    watch(categoriesFilter, (newValue) => {
        updateQuery({ categories: newValue || null });
    });

    watch(page, (newValue) => {
        updateQuery({ page: newValue || null });
    });

    // Reset filters
    const resetFilters = () => {
        searchQuery.value = '';
        categoriesFilter.value = '';
        page.value = 1;
        updateQuery({ q: null, categories: null, page: 1 });
    };

    // Computed property to check if any filter is active
    const isAnyFilterActive = computed(() => {
        return !!searchQuery.value || !!categoriesFilter.value;
    });

    // Return the reactive state and methods
    return {
        searchQuery,
        setSearchQuery: (value: string) => (searchQuery.value = value),
        categoriesFilter,
        setCategoriesFilter: (value: string) => (categoriesFilter.value = value),
        page,
        setPage: (value: number) => (page.value = value),
        resetFilters,
        isAnyFilterActive
    };
}


