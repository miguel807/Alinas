<template>
  <div class="q-pa-md q-gutter-sm" style="border-radius: 15px">
    <q-tree
      :nodes="simple"
      node-key="label"
      color="white"
      text-color="white"
      class="text-subtitle2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { info, map, call } from '@quasar/extras/mdi-v6';

const simple = [
  {
    label: 'Información:',
    icon: 'info',
    children: [
      {
        label: 'Good food',
        icon: 'restaurant_menu',

        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }]
      },
      {
        label: 'Llámanos: +5597458',
        icon: 'call',
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' }
        ]
      },
      {
        label: 'Dirección: General Benitez #25',
        icon: 'map',
        children: [
          {
            label: 'Happy atmosphere (with image)',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
          },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' }
        ]
      }
    ]
  }
];
</script>
