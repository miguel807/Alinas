<template>
  <div
    class="q-ml-xs q-mr-xs row items-start q-gutter-md"
    style="width: 99%; margin-top: 2px"
  >
    <q-card
      class="my-card full-width"
      style="width: 99%; border: 1px solid rgb(180, 180, 180); height: 230px"
    >
      <q-btn
        flat
        color="primary"
        round
        style="margin-left: 85%"
        @click="useCart.removeToCart(props.title)"
        ><q-icon
          color="negative"
          size="sm"
          style="color: #cf0000; border-radius: 100px"
          name="delete"
        ></q-icon>
      </q-btn>
      <q-card-section
        horizontal
        style="
          display: flex;
          flex-direction: row;
          justify-content: start;
          margin: auto;
        "
      >
        <q-img
          class="col-5"
          fit="cover"
          :src="props.photo"
          style="
            margin-top: 2px;

            max-height: 120px;
            height: 120px;
            border-radius: 12px;
          "
        />

        <q-card-section>
          <q-title
            style="color: black; font-weight: bold; text-transform: capitalize"
            class="text-h6"
          >
            {{ props.title }}</q-title
          ><br />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions
        style="
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 90%;
        "
      >
        <q-btn
          flat
          color="primary"
          round
          class="q-mr-xs"
          @click="useCart.decreaseProduct(props.title)"
          ><q-icon
            color="negative"
            size="sm"
            style="color: #cf0000; border-radius: 100px"
            name="remove"
          ></q-icon>
        </q-btn>
        <span style="color: rgb(57, 56, 56)" class="text-h7">
          {{ $props.counts }} x ${{ props.price }} =
        </span>
        <span
          style="color: black; font-weight: bold; margin-left: 5px"
          class="text-h7 q-ml-xm"
        >
          {{ props.pricePerProduct }} CUP</span
        >
        <q-btn
          style="outline: 2px solid yellow"
          flat
          color="primary"
          round
          class="q-mr-xs"
          @click="useCart.incrementProduct(props.title)"
          ><q-icon
            color="negative"
            size="sm"
            style="color: #cf0000; border-radius: 100px"
            name="add"
          ></q-icon>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import add from '@quasar/extras/mdi-v6';
import { useCartStore } from 'src/stores/useCartStore';
import { defineProps } from 'vue';
const useCart = useCartStore();

const props = defineProps({
  title: String,
  photo: String,
  price: Number,
  counts: Number,
  pricePerProduct: Number
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
