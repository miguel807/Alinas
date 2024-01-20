<template>
  <h5 v-if="router.params.name !== 'empty'">
    Categoria: <span style="color: #ce0e31"> {{ router.params.name }}</span>
  </h5>
  <h5 v-else>Crear Categoria</h5>

  <div style="width: 20%">
    <q-input
      v-model="categoryName"
      color="negative"
      label="Nombre Categoria"
      :rules="[(val) => !!val || 'Campo es requerido']"
    />
    <br />
    <q-file outlined v-model="file" label="foto">
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>
    <q-btn
      v-if="router.params.name !== 'empty'"
      color="negative"
      class="q-mt-md"
      :disable="categoryName === ''"
      @click="editCategory"
    >
      Editar
    </q-btn>
    <q-btn
      v-else
      color="negative"
      class="q-mt-md"
      :disable="categoryName === ''"
      @click="createCategory"
    >
      Crear Categoria
    </q-btn>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/config/api';
import FetchData from 'src/services/fetchData';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { useQuasar } from 'quasar';
const $q = useQuasar();
const fetchService = new FetchData();
const router = useRoute();
const categoryName = ref('');
categoryName.value = router.params.name;
const file = ref(null);

function showNotifyCreated() {
  $q.notify({
    message: 'Categoría Creada',
    color: 'negative'
  });
}
function showNotifyUpdated() {
  $q.notify({
    message: 'Categoría Editada',
    color: 'negative'
  });
}
const createCategory = () => {
  const uriPhoto = `${api.downloadImage}/${file.value.name}`;
  const payload = {
    name: categoryName.value,
    photo: uriPhoto,
    description: '',
    count_products: 1
  };

  fetchService.createOneCategory(payload, file.value);
  showNotifyCreated();
};

const editCategory = () => {
  let payload;
  if (file.value !== null) {
    const uriPhoto = `${api.downloadImage}/${file.value.name}`;
    payload = {
      name: categoryName.value,
      photo: uriPhoto
    };
  } else {
    payload = {
      name: categoryName.value
    };
  }
  fetchService.updateOneCategory(router.params.name, payload, file.value);
  showNotifyUpdated();
};
</script>

<style scoped></style>
