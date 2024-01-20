<template>
  <div class="todo">
    <span class="text-h3 text-center" style="color: #ce0e31">Login</span>

    <div
      style="
        height: 300px;
        width: 400px;
        border: 2px solid #ce0e31;
        border-radius: 10px;
        margin: auto;
        margin-top: 50px;
        background: beige;
      "
    >
      <q-input
        style="margin: 20px"
        outlined
        v-model="username"
        color="negative"
        label="Usuario"
      />

      <q-input
        style="margin: 20px"
        outlined
        type="password"
        color="negative"
        v-model="password"
        label="Contraseña"
      />
      <div v-if="error" class="text-negative text-h6 q-mt-lg q-mb-md">
        Usuario o contraseña incorrecta
      </div>
      <q-btn color="negative" style="margin-top: 20px" @click="login"
        >Ingresar <q-icon name="login" class="q-ml-sm"></q-icon>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/config/api';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username: Ref<string> = ref('');
const password: Ref<string> = ref('');
const error: Ref<boolean> = ref(false);
const login = async () => {
  const payload = {
    username: username.value,
    password: password.value
  };
  try {
    const resp = await fetch('http://alinasbackend.onrender.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    console.log(data);
    if (data) {
      localStorage.setItem('auth', 'true');
      router.push({ name: 'adminCategory' });
    } else {
      error.value = true;
      username.value = '';
      password.value = '';
    }
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
.todo {
  background-color: #d6d3d3;
  text-align: center;
  height: 100vh;
  padding-top: 25px;
}
</style>
