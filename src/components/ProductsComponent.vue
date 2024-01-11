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
    Productos
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
    <ProductCard
      v-for="itm in products"
      :key="itm.name"
      :name="itm.name"
      :photo="itm.photo"
      :description="itm.description"
      :price="itm.price"
      :ingredients="itm.ingredients"
      :grm="itm.grm"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted, defineProps } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import FetchData from '../services/fetchData';

const fetchData = new FetchData();

const props: any = defineProps({ category: String });

const products = fetchData.getAllProductsByCategory();
onMounted(async () => {
  fetchData.fetchProductsByCategory(props.category);
});
</script>

<style scoped></style>
