<template>
  <q-layout view="lHh Lpr lFf" class="desktop-layout mobile-layout">
    <q-header
      elevated
      style="height: 0px; padding-top: 0px; background-color: transparent"
    >
      <q-toolbar>
        <!--
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />-->

        <q-toolbar-title
          style="
            font-size: 28px;
            margin-top: 10px;
            margin-left: 4px;
            font-family: 'Times New Roman', Times, serif;
          "
          class="text-weight-light"
        >
        </q-toolbar-title>

        <div style="padding-top: 25px">
          <router-link :to="{ name: 'admin' }">
            <q-btn round flat icon="person" color="amber-7" size="lg" />
          </router-link>
          <router-link to="/orders">
            <q-btn
              round
              flat
              color="amber-7"
              icon="shopping_cart"
              size="lg"
              class="q-mr-sm q-ml-md"
            >
              <q-badge color="amber-9" rounded floating>{{
                store.getCart.length
              }}</q-badge>
            </q-btn>
          </router-link>
        </div>
      </q-toolbar>
    </q-header>
    <!--
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
-->
    <q-page-container style="padding-bottom: 80px">
      <router-view />
      <div style="display: flex; justify-content: center" class="foterBar">
        <div
          class="foterBar"
          style="
            width: 80%;
            border-radius: 15px;
            margin-bottom: 5px;
            height: 60px;
            background-color: red;
            bottom: 20px;
            position: fixed;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 3px;
          "
        >
          <span> Total A Pagar: ${{ store.getTotalAmount }}</span
          ><br />
          <router-link to="/orders" style="color: black"
            ><q-btn>Ver productos</q-btn></router-link
          >
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from 'vue';
import { shopping_cart } from '@quasar/extras/mdi-v6';
import { useCartStore } from '../stores/useCartStore';
const store = useCartStore();
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .desktop-layout {
    width: 400px;
    margin: auto;
  }
  .foterBar {
    max-width: 400px;
  }
}

@media screen and (max-width: 599px) {
  .mobile-layout {
    width: 100%;
  }
}
</style>
