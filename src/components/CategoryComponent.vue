<template>
  <div
    class="text-center text-h4 q-pt-sm q-pb-sm text-amber-10 text-weight-bold q-mt-md"
    style="
      font-family: 'Times New Roman', Times, serif;
      background-color: rgba(0, 0, 0, 0.129);
      border-top: 1px solid rgb(235, 187, 124);
      border-bottom: 1px solid rgb(235, 187, 124);
    "
  >
    Categorías
  </div>
  <div
    class="text-h5 q-ml-md q-pt-md"
    style="
      margin: auto;
      border-radius: 10px;
      width: 100%;
      color: white;
      font-family: 'Times New Roman', Times, serif;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    "
  >
    <CardComponent
      v-for="itm in categories"
      :key="itm.name"
      :title="itm.name"
      :photo="itm.photo"
    >
    </CardComponent>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import CardComponent from '../components/CardComponent.vue';
import FetchData from '../services/fetchData';
const fetchData = new FetchData();

const categories = fetchData.getAllCategories();

onMounted(async () => {
  fetchData.fetchAllCategories();
});
</script>

<style scoped></style>
