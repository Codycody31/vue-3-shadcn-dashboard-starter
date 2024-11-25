<script setup lang="ts">
import {DataTable as ProductTable} from '@/common/components/ui/data-table';

const columns = [
  {
    accessorKey: 'photo_url',
    header: 'IMAGE',
    // cell: ({ row }) => {
    //   return (
    //       <div className="relative aspect-square">
    //       <Image
    //           src={row.getValue('photo_url')}
    //   alt={row.getValue('name')}
    //   fill
    //   className="rounded-lg"
    //       />
    //       </div>
    // );
    // }
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
  // {
    // id: 'actions',
    // cell: ({ row }) => <CellAction data={row.original} />
  // }
];

// TODO: Finish up migration, as currently, just using filler, not the actual filler design from the next one.
</script>

<template>
  <ProductTable
      :columns="columns"
      :data="[
          {
              id: 1,
              name: 'Product 1',
              category: 'Category 1',
              price: 100,
              description: 'Description 1',
              photo_url: 'https://via.placeholder.com/150'
          },
          {
              id: 2,
              name: 'Product 2',
              category: 'Category 2',
              price: 200,
              description: 'Description 2',
              photo_url: 'https://via.placeholder.com/150'
          },
          {
              id: 3,
              name: 'Product 3',
              category: 'Category 3',
              price: 300,
              description: 'Description 3',
              photo_url: 'https://via.placeholder.com/150'
          },
          {
              id: 4,
              name: 'Product 4',
              category: 'Category 4',
              price: 400,
              description: 'Description 4',
              photo_url: 'https://via.placeholder.com/150'
          },
          {
              id: 5,
              name: 'Product 5',
              category: 'Category 5',
              price: 500,
              description: 'Description 5',
              photo_url: 'https://via.placeholder.com/150'
          }
      ]"
      :totalItems="5"
  />
</template>
