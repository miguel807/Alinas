<template>
  <div
    class="q-ml-xs q-mr-xs row items-start q-gutter-md"
    style="width: 99%; margin-top: 2px"
  >
    <q-card class="my-card full-width" style="width: 99%">
      <q-card-section vertical>
        <q-toggle
          v-model="isVisibl"
          @click="handleClickIsVisible"
          color="negative"
          :label="isVisibl ? 'Visible' : 'No visible'"
      /></q-card-section>
      <q-card-section horizontal>
        <q-img
          class="col-5"
          :src="props.photo"
          height="90px"
          style="border-radius: 10px; margin-top: 2px"
        />

        <q-card-section style="text-transform: capitalize">
          <q-title
            style="color: black; font-weight: bold; text-transform: capitalize"
          >
            {{ props.title }}</q-title
          ><br />
          {{ props.description }}
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <div class="q-ml-md">
          <span
            class="text-negative q-mr-md"
            style="font-weight: bold; font-size: large"
            >${{ props.price }}</span
          >
          <span
            class="text-negative"
            style="font-weight: bold; font-size: large"
            >{{ props.grm }}</span
          >
        </div>
        <q-btn
          flat
          color="dark"
          round
          class="q-mr-md"
          @click="fetchService.deleteOneProduct(props.id), showNotifyDeleted()"
        >
          Eliminar</q-btn
        >
        <router-link
          :to="{ name: 'adminProductName', params: { name: props.id } }"
        >
          <q-btn flat color="negative" round class="q-mr-md"> Editar</q-btn>
        </router-link>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import add from '@quasar/extras/mdi-v6';
import FetchData from 'src/services/fetchData';
import { useCartStore } from 'src/stores/useCartStore';
import { defineProps, ref } from 'vue';
import { useQuasar } from 'quasar';

import { api } from 'src/config/api';
const useCart = useCartStore();
const $q = useQuasar();
const isVisibl = ref(false);

function showNotifyDeleted() {
  $q.notify({
    message: 'Producto eliminado',
    color: 'negative'
  });
}

const fetchService = new FetchData();
const props = defineProps({
  title: String,
  photo: String,
  price: Number,
  grm: Number,
  description: String,
  isVisible: Boolean,
  id: Number
});
isVisibl.value = props.isVisible;
const handleClickIsVisible = async () => {
  const payload = {
    isVisible: isVisibl.value
  };
  try {
    const response = await fetch(`${api.getAllProducts}${props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    let data = await response.json();
    isVisibl.value = data.isVisible;
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
