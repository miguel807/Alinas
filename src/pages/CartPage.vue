<template>
  <q-page
    class="row justify-evenly"
    style="width: 100%; background-color: #e9ded3"
  >
    <div class="col-12" style="height: max-content">
      <q-img width="100%" src="../assets/logooo.jpg" height="61%" fit="fill">
      </q-img>
      <CartComponent></CartComponent>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CartComponent from 'src/components/CartComponent.vue';
</script>
