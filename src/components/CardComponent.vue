<template>
  <div
    class="q-pa-md row items-start"
    style="
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <q-card class="my-card" style="border-radius: 8px">
      <router-link :to="{ name: 'products', params: { name: props.title } }">
        <q-img :src="props?.photo" fit="scale-down" width="100%">
          <div
            class="absolute-bottom text-subtitle2 text-center"
            style="text-transform: uppercase"
          >
            {{ props?.title }}
          </div>
        </q-img>
      </router-link>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({ title: String, photo: String });

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
</script>

<style scoped lang="scss">
.my-card {
  width: 100%;
  max-width: 320px;
  animation: highlight 3s infinite;
  border: 1px solid white;
  margin-right: 15px;
}

@keyframes highlight {
  0% {
    box-shadow: 0 0 3px #000;
  }
  50% {
    box-shadow: 0 0 7px #ff7d7d, 0 0 12px #f59a9a;
    border: 1px solid $deep-orange-5;
  }
  100% {
    box-shadow: 0 0 3px #000;
  }
}
</style>
