<template>
  <h5 v-if="router.params.name !== 'empty'">
    Editar Producto:
    <span style="color: #ce0e31"> {{ productName }}</span>
  </h5>
  <h5 v-else>Crear Nuevo Producto</h5>
  <div style="width: 30%">
    <q-input
      v-model="productName"
      color="negative"
      label="Nombre"
      :rules="[(val) => !!val || 'Campo es requerido']"
    />
    <q-input
      v-model="productPrice"
      label="Precio"
      color="negative"
      :rules="[(val) => (val > 0 && val < 100000) || 'Digite números validos']"
    />
    <q-input
      v-model="productDescription"
      label="Descripcion"
      color="negative"
      :rules="[(val) => !!val || 'Campo es requerido']"
    />

    <q-file outlined v-model="productPhoto" label="foto">
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
    </q-file>
    <q-select
      v-if="router.params.name === 'empty'"
      v-model="category"
      :options="options"
      label="Categoria"
      option-label="name"
      option-value="id"
    />
    <q-btn
      class="q-mt-lg"
      v-if="router.params.name !== 'empty'"
      color="negative"
      @click="editProduct"
      >Editar producto</q-btn
    >
    <q-btn
      v-else
      class="q-mt-lg"
      color="negative"
      :disable="validation"
      @click="createProduct"
      >Crear producto</q-btn
    >
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/config/api';
import FetchData from 'src/services/fetchData';
import { ref, Ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';
const router = useRoute();
const fetchService = new FetchData();
const productName: Ref<string> = ref(' ');
const productPrice: Ref<number> = ref(0);
const productGrm: Ref<number> = ref(0);
const productDescription: Ref<string> = ref(' ');
const productIngredient: Ref<string> = ref('');
const productPhoto = ref(null);
const category = ref(0);
const $q = useQuasar();
let options = fetchService.getAllCategories();

function showNotifyCreated() {
  $q.notify({
    message: 'Producto Creado',
    color: 'negative'
  });
}
function showNotifyUpdated() {
  $q.notify({
    message: 'Producto Editado',
    color: 'negative'
  });
}

//Editar
onMounted(async () => {
  await fetchService.fetchOneProduct(router.params.name);
  const product = fetchService.getOneProductMethod();
  await fetchService.fetchAllCategories();

  productName.value = product.value.name;
  productDescription.value = product.value.description;
  productPrice.value = Number(product.value.price);
  productGrm.value = Number(product.value.grm);
  productIngredient.value = product.value.ingredients;
});

const editProduct = async () => {
  let payload;
  if (productPhoto.value !== null) {
    const uriPhoto = `${api.downloadImage}/${productPhoto.value.name}`;
    payload = {
      name: productName.value.trim(),
      photo: uriPhoto,
      price: parseInt(productPrice.value),

      description: productDescription.value
    };
  } else {
    payload = {
      name: productName.value.trim(),
      price: parseInt(productPrice.value),

      description: productDescription.value
    };
  }
  await fetchService.updateOneProduct(
    router.params.name,
    payload,
    productPhoto.value
  );
  await showNotifyUpdated();
};

const createProduct = () => {
  let payload;

  const uriPhoto = `${api.downloadImage}/${productPhoto.value.name}`;
  payload = {
    name: productName.value.trim(),
    photo: uriPhoto,
    price: parseInt(productPrice.value),
    isVisible: true,
    description: productDescription.value || '  ',

    id_category: category.value.id
  };

  fetchService.createOneProduct(payload, productPhoto.value);
  showNotifyCreated();
};

const validation = computed(() => {
  if (productName.value === ' ' || productDescription.value === ' ') {
    return true;
  }
  return false;
});
</script>

<style scoped></style>
