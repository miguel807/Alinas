<template>
  <div class="q-pa-md">
    <div v-if="data !== 'empty'" style="margin-bottom: 25px">
      <span class="text-h5">Editar Categoría:</span>
    </div>
    <div v-if="data === 'empty'" style="margin-bottom: 25px">
      <span class="text-h5">Crear Categoría:</span>
    </div>
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-input v-model="name" label="Nombre" placeholder="Nombre" />
      <q-file color="primary" v-model="model" label="Foto">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-btn
        v-if="data === 'empty'"
        icon="edit"
        color="primary"
        style="margin-top: 20px"
        @click="createCategory"
      >
        Crear
      </q-btn>
      <q-btn
        v-if="data !== 'empty'"
        icon="edit"
        color="primary"
        style="margin-top: 20px"
        @click="editCategory"
      >
        Editar
      </q-btn>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { parse } from 'path';
import { api } from 'src/config/api';
import FetchData from 'src/services/fetchData';
('src/services/fetchData');
import { ref, Ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const name: Ref = ref('');
const model: Ref = ref(null);
const fetchService = new FetchData();
const router = useRoute();
const category = fetchService.getOneCategoryByName();
const data = router.params.name;
onMounted(async () => {
  if (router.params.name === 'empty') {
    name.value = '';
  } else {
    name.value = router.params.name;
  }
});
const createCategory = () => {
  const uriPhoto = `${api.downloadImage}/${model.value.name}`;
  const payload = {
    name: name.value,
    photo: uriPhoto || '',
    description: '',
    count_products: 1
  };

  fetchService.createOneCategory(payload, model.value);
};
const editCategory = () => {
  let copy: string = router.params.name;
  const payload = {
    name: name.value,
    photo: model.value
  };
  fetchService.updateOneCategory(copy, payload);
};
</script>

<style scoped></style>
