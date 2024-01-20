<template>
  <div>
    <CardProduct
      v-for="itm in products"
      :key="itm.name"
      :title="itm.name"
      :photo="itm.photo"
      :price="itm.price"
      :grm="itm.grm"
      :description="itm.description"
      :isVisible="itm.isVisible"
    ></CardProduct>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watchEffect, Ref, ref } from 'vue';
import { useRoute } from 'vue-router';
import CardProduct from 'src/components/CardProduct.vue';
import FetchData from 'src/services/fetchData';

const fetchData = new FetchData();
const products = fetchData.getAllProductsByCategory();
const router = useRoute();
const param: Ref<string> = ref(router.params.name);
onMounted(async () => {
  const router = useRoute();
  const Pizza = 'Pizza';
  const categoryName: string = router.params.name || Pizza;
  fetchData.fetchProductsByCategory(categoryName);
});

watchEffect(() => {
  param.value = router.params.name;
  fetchData.fetchProductsByCategory(param.value);
});
</script>

<style scoped></style>
