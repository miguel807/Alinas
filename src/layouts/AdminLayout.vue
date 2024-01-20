<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 800px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-negative">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title class="q-ml-xl"> Administración </q-toolbar-title>
          <q-icon name="settings" size="md" class="q-mr-md" />
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="500">
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <router-link
              style="text-decoration: none"
              :to="{ name: 'userEdit' }"
            >
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="negative" name="person" />
                </q-item-section>

                <q-item-section
                  style="text-decoration: none; color: black"
                  class="text-subtitle1"
                >
                  Bienvenido
                </q-item-section>
              </q-item>
            </router-link>

            <router-link
              style="text-decoration: none"
              :to="{ name: 'adminCategory' }"
            >
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="negative" name="category" />
                </q-item-section>
                <q-item-section
                  class="text-subtitle1"
                  style="text-decoration: none; color: black; font-weight: 400"
                >
                  Categorías
                </q-item-section>
              </q-item>
            </router-link>

            <router-link
              style="text-decoration: none"
              :to="{ name: 'adminProduct' }"
            >
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="negative" name="inventory" />
                </q-item-section>
                <q-item-section
                  style="text-decoration: none; color: black"
                  class="text-subtitle1"
                >
                  Productos
                </q-item-section>
              </q-item>
            </router-link>
            <router-link style="text-decoration: none" :to="{ name: 'menu' }">
              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon color="negative" name="restaurant_menu" />
                </q-item-section>
                <q-item-section
                  style="text-decoration: none; color: black"
                  class="text-subtitle1"
                >
                  Volver al menú
                </q-item-section>
              </q-item>
            </router-link>

            <router-link style="text-decoration: none" :to="{ name: 'menu' }">
              <q-item active clickable v-ripple @click="logout">
                <q-item-section avatar>
                  <q-icon color="negative" name="arrow_back" />
                </q-item-section>
                <q-item-section
                  style="text-decoration: none; color: black"
                  class="text-subtitle1"
                >
                  Logout
                </q-item-section>
              </q-item>
            </router-link>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const logout = () => {
  localStorage.removeItem('auth');
};

const drawer = ref(false);
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
