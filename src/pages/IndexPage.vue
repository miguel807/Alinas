<template>
  <q-page class="row justify-evenly" style="width: 100%">
    <div style="height: 100%; width: 100%">
      <div class="q-col-gutter-md row items-start">
        <div class="col-12">
          <q-img
            :src="categoryPhoto"
            width="100%"
            fit="fill"
            style="height: 280px"
          >
          </q-img>
          <div
            class="text-h5 text-center"
            style="
              height: 50px;
              background-color: #cf0000cc;
              width: 80%;
              text-align: center;
              margin: auto;
              border-radius: 12px;
              position: relative;
              top: -20px;
              color: white;
              font-weight: 500;
              padding-top: 10px;
            "
          >
            {{ categoryName }}
          </div>
        </div>
      </div>
      <div>
        <CaruselComponent @changeCategory="change"></CaruselComponent>
      </div>
      <div style="width: 100%">
        <router-view></router-view>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import CaruselComponent from 'src/components/CaruselComponent.vue';

const categoryName: Ref = ref("Alinas'Pizzas");
const uri =
  'https://alinasbackend.onrender.com/product/downloadImage/Pizza.jpg';
const categoryPhoto: Ref = ref(uri);
const change = (name: string, photo: string) => {
  categoryName.value = name;
  categoryPhoto.value = photo;
};
</script>
