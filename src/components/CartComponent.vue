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
    Productos a Pedir
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
    <CardToCart
      v-for="itm in store.getCart"
      :key="itm?.name"
      :name="itm?.name"
      :photo="itm?.photo"
      :price="itm.price"
      :count="itm.counts"
      :pricePerProduct="itm.pricePerProduct"
    />
  </div>
</template>

<script lang="ts" setup>
import CardToCart from './CardToCart.vue';
import { useCartStore } from '../stores/useCartStore';
const store = useCartStore();
</script>

<style scoped></style>
