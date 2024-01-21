<template>
  <div
    v-if="props.isVisible"
    class="q-ml-xs q-mr-xs row items-start q-gutter-md"
    style="width: 99%; margin-top: 2px"
  >
    <q-card class="my-card full-width" style="width: 99%">
      <q-card-section horizontal>
        <q-img
          class="col-5"
          fit="cover"
          :src="props.photo"
          style="
            margin-top: 2px;
            margin: auto;
            max-height: 150px;
            height: 150px;
            border-radius: 12px;
          "
        />

        <q-card-section
          style="
            text-transform: capitalize;

            width: 100%;
          "
        >
          <q-title
            class="text-h6"
            style="color: black; font-weight: bold; text-transform: capitalize"
          >
            {{ props.title }}</q-title
          ><br />
          {{ props.description }}
          <q-separator />

          <q-card-actions
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div>
              <span
                class="text-negative q-mr-md"
                style="font-weight: bold; font-size: large"
                >${{ props.price }}</span
              >
            </div>
            <q-btn
              flat
              color="primary"
              round
              class="q-mr-md"
              @click="handleClickAddProductToCart(props)"
              ><q-icon
                color="white"
                size="md"
                style="background-color: #cf0000; border-radius: 100px"
                name="add"
              ></q-icon>
            </q-btn>
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import add from '@quasar/extras/mdi-v6';
import { store } from 'quasar/wrappers';
import { useCartStore } from 'src/stores/useCartStore';
import { defineProps } from 'vue';
import { useQuasar } from 'quasar';
const useCart = useCartStore();

const $q = useQuasar();

const props = defineProps({
  title: String,
  photo: String,
  price: Number,
  grm: Number,
  description: String,
  isVisible: Boolean
});
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
const handleClickAddProductToCart = (props: any) => {
  const product = {
    name: props.title,
    photo: props.photo,
    price: props.price,
    counts: 1,
    pricePerProduct: props.price
  };

  useCart.addToCart(product);
  $q.notify({
    message: 'Producto agregado',
    color: 'negative'
  });
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
  height: min-content
</style>
