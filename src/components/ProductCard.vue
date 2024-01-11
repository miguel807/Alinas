<template>
  <div class="q-pa-md row items-start q-gutter-md" style="border-radius: 10px">
    <q-card class="my-card" flat bordered>
      <q-img :src="props?.photo" fit="fill" width="100%" />

      <q-card-section>
        <div class="row no-wrap items-center">
          <div
            class="col text-h6 ellipsis"
            style="color: black; text-transform: capitalize"
          >
            {{ props?.name }}
          </div>
          <div
            class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            style="color: black"
          >
            <q-icon name="place" />
            {{ props.grm }} gm
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1" style="color: black">
          {{ props.price }}$ {{ props.description }}
        </div>
        <div class="text-caption text-black" style="color: black">
          {{ props.ingredients }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="addToCart(props)">
          Añadir Orden
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import ProductCart from '../types/types';
import Product from '../types/types';
import { useCartStore } from '../stores/useCartStore';
const store = useCartStore();
const props = defineProps({
  name: String,
  photo: String,
  description: String,
  price: Number,
  ingredients: String,
  grm: Number
});
const addToCart = (props: Product) => {
  const productCart: any = {
    name: props.name,
    photo: props.photo,
    price: props.price,
    counts: 1,
    pricePerProduct: props.price
  };
  store.addToCart(productCart);
};
</script>

<style scoped lang="scss">
.my-card {
  width: 100%;
  max-width: 320px;
  animation: highlight 3s infinite;
  border: 1px solid white;
}
@keyframes highlight {
  0% {
    box-shadow: 0 0 3px #000;
  }
  50% {
    box-shadow: 0 0 7px #ff7d7d, 0 0 12px #f59a9a;
    border: 1px solid $deep-orange-5;
  }
  100% {
    box-shadow: 0 0 3px #000;
  }
}
</style>
