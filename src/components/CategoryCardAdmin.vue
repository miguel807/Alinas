<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img :src="props.photo" width="100%" height="120px">
        <div class="absolute-bottom">
          <div
            class="text-h6"
            style="text-align: center; text-transform: capitalize"
          >
            {{ props.name }}
          </div>
        </div>
      </q-img>

      <q-card-actions>
        <router-link
          :to="{ name: 'adminCategoryName', params: { name: props.name } }"
        >
          <q-btn flat color="negative">Editar</q-btn>
        </router-link>
        <q-btn flat @click="deleteCategory(props.name), showNotifyDeleted()"
          >Eliminar</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import FetchData from 'src/services/fetchData';
import { defineProps } from 'vue';
import { useQuasar } from 'quasar';

const fetchService = new FetchData();
const props = defineProps({ name: String, photo: String });
const $q = useQuasar();

function showNotifyDeleted() {
  $q.notify({
    message: 'Categoría eliminada',
    color: 'negative'
  });
}

const deleteCategory = (name: string) => {
  fetchService.deleteOneCategory(name);
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
  height: 180px
</style>
