<template>
  <div
    v-for="itm in users"
    :key="itm.username"
    class="q-mt-xl"
    style="display: flex; flex-direction: column; width: 300px"
  >
    <span class="text-h5">Usuario: {{ itm.username }}</span>
    <q-btn
      @click="changeUsername = !changeUsername"
      style="margin-top: 20px; margin-bottom: 20px"
      color="negative"
      >Cambiar nombre de usuario</q-btn
    >
    <q-btn @click="changePassword = !changePassword" color="negative"
      >Cambiar contraseña</q-btn
    >
  </div>

  <div v-if="changeUsername" class="q-mt-lg" style="width: 300px">
    <q-input
      v-model="username"
      color="negative"
      label="Nombre de usuario"
      :rules="[(val) => !!val || 'Campo es requerido']"
    />
    <q-btn @click="changeUsernameFunction" color="negative">Cambiar</q-btn>
  </div>

  <div v-if="changePassword" class="q-mt-lg" style="width: 300px">
    <q-input
      v-model="password"
      color="negative"
      label="Contraseña"
      :rules="[(val) => !!val || 'Campo es requerido']"
    />
    <q-btn @click="changePasswordFunction" color="negative">Cambiar</q-btn>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/config/api';
import { ref, onMounted } from 'vue';

const changeUsername = ref(false);
const changePassword = ref(false);
const username = ref('');
const password = ref('');
const users = ref();
onMounted(async () => {
  try {
    const res = await fetch(api.getUser);
    users.value = await res.json();
  } catch (err) {
    console.log(err);
  }
});

const changePasswordFunction = async () => {
  try {
    const payload = {
      password: password.value
    };
    const response = await fetch(`${api.getUser}${users.value[0].username}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log(err);
  }
};

const changeUsernameFunction = async () => {
  try {
    const payload = {
      username: username.value
    };
    const response = await fetch(`${api.getUser}${users.value[0].username}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped></style>
