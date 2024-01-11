import { defineStore } from 'pinia';
import ProductCart from 'src/types/types';

export const useCartStore = defineStore('cart', {
  // definición del estado
  state: () => ({
    cartProductsList: [] as ProductCart[],
    totalAmount: 0 as number,
  }),
  // definición de los getters
  getters: {
    getCart: (state) => {
      return state.cartProductsList;
    },
    getTotalAmount: (state) => {
      state.totalAmount = state.cartProductsList.reduce(
        (acumulador: number, product: ProductCart) => {
          return acumulador + product.pricePerProduct;
        },
        0
      );
      return state.totalAmount;
    },
  },

  // definición de las acciones
  actions: {
    addToCart(product: ProductCart) {
      const existingProduct = this.cartProductsList.find(
        (cartProduct) => cartProduct.name === product.name
      );

      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa la propiedad counts en 1
        existingProduct.counts += 1;
        existingProduct.pricePerProduct =
          existingProduct.price * existingProduct.counts;
      } else {
        // Si el producto no está en el carrito, lo agrega
        this.cartProductsList.push(product);
      }
    },
    removeToCart(name: string) {
      this.cartProductsList = this.cartProductsList.filter(
        (product) => product.name !== name
      );
    },

    incrementProduct(name: string) {
      this.cartProductsList.map((product) => {
        if (product.name === name) {
          product.counts += 1;
          product.pricePerProduct = product.price * product.counts;
        }
      });
    },

    decreaseProduct(name: string) {
      this.cartProductsList.map((product) => {
        if (product.name === name) {
          product.counts -= 1;
          if (product.counts === 0) {
            this.removeToCart(name);
          }
          product.pricePerProduct = product.price * product.counts;
        }
      });
    },
  },
});
