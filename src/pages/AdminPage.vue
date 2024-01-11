<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 760px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

          <q-toolbar-title>Administrador</q-toolbar-title>
          <q-icon name="settings" size="md" class="q-mr-lg"></q-icon>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="account_circle" />
              </q-item-section>

              <q-item-section> Bienvenido Miguel </q-item-section>
            </q-item>
            <router-link
              :to="{ name: 'category' }"
              style="text-decoration: none; color: $primary"
            >
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="category" />
                </q-item-section>

                <q-item-section> Categorías </q-item-section>
              </q-item>
            </router-link>
            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inventory" />
              </q-item-section>

              <q-item-section> Productos </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>router view </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawer = ref(false);
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
