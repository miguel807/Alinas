<template>
  <q-page class="q-mt-lg" style="width: 100%; background-color: white">
    <div style="height: 95px">
      <span class="text-h4 q-mt-lg q-mb-xl">Categorías</span><br />
      <router-link :to="{ name: 'editCategory', params: { name: 'empty' } }">
        <q-btn
          icon-right="add"
          color="primary"
          style="margin-top: 20px; margin-bottom: 20px"
        >
          Crear Nueva Categoría
        </q-btn>
      </router-link>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
        width: 100%;
        gap: 40px;
        margin-top: 25px;
      "
    >
      <q-card
        class="my-card"
        style="border-radius: 8px; width: 250px; height: 220px"
        v-for="itm in category"
        :key="itm.name"
      >
        <q-img
          :src="itm?.photo"
          fit="cover"
          width="100%"
          style="max-height: 170px; height: 170px"
        >
          <div
            class="absolute-bottom text-subtitle2 text-center"
            style="text-transform: uppercase"
          >
            {{ itm?.name }}
          </div>
        </q-img>
        <q-action>
          <q-btn
            class="q-mr-md q-mt-sm bg-primary"
            icon="delete"
            style="color: white"
            @click="handleClickDelete(itm?.name)"
            >Eliminar</q-btn
          >

          <q-btn class="q-mt-sm bg-primary" style="color: white" icon="edit">
            <router-link
              style="color: white; text-decoration: none"
              :to="{
                name: 'editCategory',
                params: { name: itm.name }
              }"
              >Editar</router-link
            ></q-btn
          >
        </q-action>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import FetchData from 'src/services/fetchData';
import { onMounted } from 'vue';

const fetchService = new FetchData();
const category = fetchService.getAllCategories();

onMounted(async () => {
  fetchService.fetchAllCategories();
});

const handleClickDelete = (name: string) => {
  fetchService.deleteOneCategory(name);
};
</script>
