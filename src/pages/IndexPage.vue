<template>
  <q-page
    class="row justify-evenly"
    style="width: 100%; background-color: #e9ded3"
  >
    <div class="col-12">
      <q-img width="100%" src="../assets/logooo.jpg" height="61%" fit="fill">
      </q-img>
    </div>

    <div class="col-12" style="margin-top: -150px; background-color: #e9ded3">
      <CategoryComponent></CategoryComponent>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CategoryComponent from 'src/components/CategoryComponent.vue';
</script>
