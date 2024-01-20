<template>
  <div class="q-mt-lg">
    <q-card-section>
      <span class="text-h4" style="font-weight: bold">Pedidos</span><br />
      <br />
      <span class="text-h6" style="font-weight: bold; margin-top: 10px"
        >Cantidad de Productos:
        <span style="color: #ce0e31; font-weight: bold">
          {{ userCart.getTotalProducts }}
        </span></span
      ><br />
      <span class="text-h6" style="font-weight: bold; margin-top: 10px"
        >Total a pagar:
        <span style="color: #ce0e31; font-weight: bold"
          >${{ userCart.getTotalAmount }}</span
        >
      </span>
    </q-card-section>

    <q-card-section>
      <OrderCart
        v-for="itm in userCart.getCart"
        :key="itm.name"
        :title="itm.name"
        :photo="itm.photo"
        :price="itm.price"
        :counts="itm.counts"
        :pricePerProduct="itm.pricePerProduct"
      ></OrderCart>
    </q-card-section>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from 'src/stores/useCartStore';
import OrderCart from 'src/components/OrderCart.vue';

const userCart = useCartStore();
</script>

<style scoped></style>
