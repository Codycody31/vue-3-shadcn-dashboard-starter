import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
];

export function useEmployeeTableFilters() {
    const router = useRouter();
    const route = useRoute();

    // Reactive state with default values
    const searchQuery = ref<string>(route.query.q as string || '');
    const genderFilter = ref<string>(route.query.gender as string || '');
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

    watch(genderFilter, (newValue) => {
        updateQuery({ gender: newValue || null });
    });

    watch(page, (newValue) => {
        updateQuery({ page: newValue || null });
    });

    // Reset filters
    const resetFilters = () => {
        searchQuery.value = '';
        genderFilter.value = '';
        page.value = 1;
        updateQuery({ q: null, categories: null, page: 1 });
    };

    // Computed property to check if any filter is active
    const isAnyFilterActive = computed(() => {
        return !!searchQuery.value || !!genderFilter.value;
    });

    // Return the reactive state and methods
    return {
        searchQuery,
        setSearchQuery: (value: string) => (searchQuery.value = value),
        genderFilter,
        setGenderFilter: (value: string) => (genderFilter.value = value),
        page,
        setPage: (value: number) => (page.value = value),
        resetFilters,
        isAnyFilterActive
    };
}


