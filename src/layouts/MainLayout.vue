<template>
  <title title="pr">Prueba</title>
  <q-layout view="lHh Lpr lFf" class="desktop-layout mobile-layout">
    <q-header
      class="desktop-layout mobile-layout"
      elevated
      style="height: 95px; padding-top: 0px; background-color: white"
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
            font-size: 23px;
            margin-top: 22px;
            margin-left: 4px;
            color: #ce0e31;
            font-weight: bold;
          "
          class="text-weight-light"
        >
          <q-icon name="local_pizza" size="md"></q-icon>
          Alinas'Pizzas
        </q-toolbar-title>

        <div style="padding-top: 25px">
          <router-link :to="{ name: 'adminPanel' }">
            <q-btn round flat icon="person" style="color: #cf0000" size="md" />
          </router-link>
          <q-btn
            round
            flat
            style="color: #cf0000"
            icon="shopping_cart"
            size="md"
            @click="dialog = true"
          >
            <q-badge style="background: #ce0e31" floating>{{
              store.getTotalProducts
            }}</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-bottom: 80px">
      <IndexPage></IndexPage>
      <!--
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
    -->

      <!--Modal-->
      <div class="q-pa-md q-gutter-sm">
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="slide-up"
          transition-hide="slide-down"
        >
          <q-card class="bg-white">
            <q-bar class="bg-negative">
              <q-space />

              <q-btn
                dense
                color="white"
                size="md"
                class="q-a-md"
                flat
                icon="close"
                v-close-popup
              >
                <q-tooltip class="bg-white text-primary">Close</q-tooltip>
              </q-btn>
            </q-bar>

            <OrderPage></OrderPage>
          </q-card>
        </q-dialog>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { shopping_cart } from '@quasar/extras/mdi-v6';
import { useCartStore } from '../stores/useCartStore';
import IndexPage from 'src/pages/IndexPage.vue';
import OrderPage from 'src/pages/OrderPage.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  router.push({ name: 'category', params: { name: 'Pizza' } });
});
const store = useCartStore();
const dialog = ref(false);
const maximizedToggle = ref(true);
</script>

<style scoped>
@media screen and (min-width: 600px) {
  .desktop-layout {
    background-color: #c2bdbd;
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
    background-color: #d9d6d6;
  }
}
</style>
