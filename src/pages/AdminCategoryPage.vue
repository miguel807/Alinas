<template>
  <div class="text-h6 q-mt-md">Categorías</div>

  <router-link :to="{ name: 'adminCategoryName', params: { name: 'empty' } }">
    <q-btn color="negative" class="q-mt-lg q-mb-lg">
      Crear nueva categoria
    </q-btn>
  </router-link>
  <div
    style="
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: start;
    "
  >
    <CategoryCardAdmin
      v-for="itm in categories"
      :key="itm.name"
      :name="itm.name"
      :photo="itm.photo"
    ></CategoryCardAdmin>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import FetchData from 'src/services/fetchData';
import { useRoute } from 'vue-router';
import CategoryCardAdmin from 'src/components/CategoryCardAdmin.vue';
import { useQuasar } from 'quasar';

const fetchData = new FetchData();
const router = useRoute();
const categories = fetchData.getAllCategories();

onMounted(async () => {
  fetchData.fetchAllCategories();
});
</script>

<style scoped></style>
