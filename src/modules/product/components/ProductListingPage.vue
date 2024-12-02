<script setup lang="ts">
import {DataTable as ProductTable} from '@/common/components/ui/data-table';
import {useRoute} from "vue-router";
import {fakeProducts} from '@/constants/mock-api';
import {Product} from '@/constants/data';
import {h} from 'vue';
import Image from '@/common/components/Image.vue';
import CellAction from '@/modules/product/components/CellAction.vue';

const columns = [
  {
    accessorKey: 'photo_url',
    header: 'IMAGE',
    cell: ({row}) => h(
        'div',
        {
          class: 'relative aspect-square',
        },
        [
          h(Image, {
            src: row.getValue('photo_url'),
            alt: row.getValue('name'),
            imageClass: 'rounded-lg',
          }),
        ]
    ),
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY'
  },
  {
    accessorKey: 'price',
    header: 'PRICE'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },
  {
    id: 'actions',
    cell: ({row}) => h(
        CellAction,
        {
          data: row.original,
        }
    ),
  }
];

const page = useRoute().query.page || 1;
const search = useRoute().query.q || '';
const pageLimit = useRoute().query.limit || 10;
const categories = useRoute().query.categories || '';

const filters = {
  page,
  limit: pageLimit,
  ...(search && {search}),
  ...(categories && {categories: categories})
};

// Add reactive data, so as filters change, the data will be re-fetched

const data = await fakeProducts.getProducts(filters);
const totalProducts = data.total_products;
const products: Product[] = data.products;
</script>

<template>
  <ProductTable
      :columns="columns"
      :data="products"
      :totalItems="totalProducts"
  />
</template>
