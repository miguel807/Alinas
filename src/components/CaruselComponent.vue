<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-type="regular"
    control-color="red-9"
    control-text-color="white"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    height="177px"
    class="shadow-2 rounded-borders"
    @mouseenter="autoplay = false"
    @mouseleave="autoplay = true"
    style="background-color: #d9d6d6; margin: auto"
  >
    <q-carousel-slide
      v-for="(group, index) in groupedItems"
      :key="index"
      :name="`group-${index}`"
      style="height: 170px"
    >
      <div style="height: 100%">
        <div
          class="row fit items-center q-gutter-xs q-col-gutter no-wrap"
          style="justify-content: center"
        >
          <div
            class="rounded-borders col-4 full-height"
            v-for="(item, index) in group"
            :key="index"
          >
            <q-img
              :src="item.photo"
              fit="cover"
              height="180px"
              @click="ChangeCategoryhandleClick(item.name, item.photo)"
              style="border-radius: 8px"
            >
              <div
                class="absolute-center text-subtitle2 text-center"
                style="background-color: #fd0c0c93; border-radius: 10px"
              >
                {{ item.name }}
              </div></q-img
            >
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineEmits } from 'vue';
import FetchData from 'src/services/fetchData';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['changeCategory']);
const fetchData = new FetchData();
const slide = ref('group-0');
const items = fetchData.getAllCategories();
const autoplay = ref(true);
onMounted(async () => {
  fetchData.fetchAllCategories();
});

const ChangeCategoryhandleClick = (name: string, photo: string) => {
  emit('changeCategory', name, photo);
  router.push({ name: 'category', params: { name: name } });
};
const groupedItems = computed(() => {
  let groups = [];
  for (let i = 0; i < items.value.length; i += 3) {
    groups.push(items.value.slice(i, i + 3));
  }
  return groups;
});
</script>

<!--
<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="negative"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      height="200px"
      class="shadow-2 rounded-borders"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      style="background-color: #c2bdbd"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            v-for="itm in categories"
            :key="itm.name"
            class="rounded-borders col-4 full-height"
            :src="itm.photo"
            @click="ChangeCategoryhandleClick(itm.name, itm.photo)"
          >
            <div
              class="absolute-center text-subtitle1 text-center"
              style="background-color: #fd0c0c93; border-radius: 10px"
            >
              {{ itm.name }}
            </div></q-img
          >
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-img
            class="rounded-borders col-5 full-height"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted, defineEmits } from 'vue';
import FetchData from 'src/services/fetchData';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['changeCategory']);
const fetchData = new FetchData();
const categories = fetchData.getAllCategories();

const autoplay: Ref<boolean> = ref(true);

const ChangeCategoryhandleClick = (name: string, photo: string) => {
  emit('changeCategory', name, photo);
  router.push({ name: 'category', params: { name: name } });
};

onMounted(async () => {
  fetchData.fetchAllCategories();
});

const slide = ref(1);
</script>

-->
