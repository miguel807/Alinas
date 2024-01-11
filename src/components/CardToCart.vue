<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-img class="col-5" :src="props.photo" />

        <q-card-section>
          <span
            style="color: black; text-transform: capitalize"
            class="text-h5"
            >{{ props.name }}</span
          ><br />
          <span style="color: black" class="text-subtitle1"
            >$ {{ props.price }}</span
          ><br />
          <span style="color: black" class="text-subtitle1"
            >Cantidad: {{ props.count }}</span
          >
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn
          style="color: black"
          flat
          @click="store.decreaseProduct(props?.name)"
          >-</q-btn
        >
        <q-btn style="color: black" flat
          >Total: {{ props.pricePerProduct }}</q-btn
        >
        <q-btn
          style="color: black"
          flat
          @click="store.incrementProduct(props?.name)"
          >+
        </q-btn>
        <q-btn
          style="color: black"
          flat
          color="primary"
          @click="store.removeToCart(props?.name)"
          >Eliminar
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { useCartStore } from '../stores/useCartStore';
const store = useCartStore();
const props = defineProps({
  name: String,
  photo: String,
  price: Number,
  count: Number,
  pricePerProduct: Number
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
