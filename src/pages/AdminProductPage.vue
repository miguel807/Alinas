<template>
  <div class="text-h6 q-mt-md">Productos</div>

  <router-link :to="{ name: 'adminProductName', params: { name: 'empty' } }">
    <q-btn color="negative" class="q-mt-lg q-mb-lg"> Crear producto </q-btn>
  </router-link>

  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
      gap: 15px;
    "
  >
    <ProductCardAdmin
      v-for="itm in products"
      :key="itm.name"
      :title="itm.name"
      :photo="itm.photo"
      :grm="itm.grm"
      :description="itm.description"
      :price="itm.price"
      :isVisible="itm.isVisible"
      :id="itm.id"
      style="width: 25%"
    ></ProductCardAdmin>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import ProductCardAdmin from 'src/components/ProductCardAdmin.vue';
import FetchData from 'src/services/fetchData';

const fetchService = new FetchData();
const products = fetchService.getAllProductsMethod();

onMounted(async () => {
  fetchService.fetchAllProducts();
});
</script>

<style scoped></style>
