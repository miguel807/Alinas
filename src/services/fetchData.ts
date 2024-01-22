import { api } from 'src/config/api';
import Category from 'src/types/types';
import Product from 'src/types/types';
import { ref, Ref } from 'vue';

interface payloadProduct {
  name: string;
  description: string;
  grm: number;
  price: number;
  photo: string;
  ingredients: string;
}

interface payloadProductCreate {
  name: string;
  description: string;
  grm: number;
  price: number;
  photo: string;
  ingredients: string;
  id_category: number;
  isVisible: boolean;
}

export default class FetchData {
  private categories: Ref<Category[]>;
  private getAllCategoriesUri: string;

  private productsByCategory: Ref<Product[]>;
  private getProductByCategoryUri: string;

  private getCategoryByName: Ref<Category>;
  private getCategoryByNameUri: string;

  private products: Ref<Product[]>;
  private product: Ref<Product>;
  private getAllProductsUri: string;

  constructor() {
    this.categories = ref([]);
    this.productsByCategory = ref([]);
    this.getCategoryByName = ref({
      name: '',
      photo: '',
      description: '',
      count_products: 0,
      counts: 0,
      grm: 0,
      id_category: 0,
      ingredients: '',
      price: 0,
      pricePerProduct: 0,
    });
    this.product = ref({
      name: '',
      photo: '',
      description: '',
      count_products: 0,
      counts: 0,
      grm: 0,
      id_category: 0,
      ingredients: '',
      price: 0,
      pricePerProduct: 0,
    });
    this.getAllCategoriesUri = api.getAllCategories;
    this.getProductByCategoryUri = api.getProductsByCategory;
    this.getCategoryByNameUri = api.getCategoryByName;
    this.products = ref([]);
    this.getAllProductsUri = api.getAllProducts;
  }

  getAllCategories(): Ref<Category[]> {
    return this.categories;
  }
  getAllProductsByCategory(): Ref<Product[]> {
    return this.productsByCategory;
  }

  getOneCategoryByName(): Ref<Category> {
    return this.getCategoryByName;
  }

  getAllProductsMethod(): Ref<Product[]> {
    return this.products;
  }

  getOneProductMethod(): Ref<Product> {
    return this.product;
  }

  async fetchAllProducts() {
    try {
      const res = await fetch(this.getAllProductsUri);
      this.products.value = await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async fetchOneProduct(name: number) {
    try {
      const res = await fetch(`${this.getAllProductsUri}${name}`);
      this.product.value = await res.json();
    } catch (err) {
      console.log(err);
    }
  }

  async fetchAllCategories() {
    try {
      const res = await fetch(this.getAllCategoriesUri);
      this.categories.value = await res.json();
      console.log(this.categories.value);
      this.categories.value.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log(this.categories.value);
    } catch (err) {
      console.log(err);
    }
  }
  async fetchProductsByCategory(name: string) {
    try {
      const res = await fetch(`${this.getProductByCategoryUri}/${name}`);
      const response = await res.json();
      this.productsByCategory.value = await response?.products;
    } catch (err) {
      console.log(err);
    }
  }

  async fetchOneCategory(name: string) {
    try {
      const res = await fetch(`${this.getCategoryByNameUri}/${name}`);
      const data = await res.json();
      this.getCategoryByName.value = data;
    } catch (err) {
      console.log(err);
    }
  }

  async updateOneCategory(name: string, payload: any, image: File) {
    if (image != null) {
      const formData = new FormData();
      formData.append('file', image);
      try {
        const response = await fetch(`${api.uploadImage}`, {
          method: 'POST',
          body: formData,
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await fetch(`${this.getCategoryByNameUri}/${name}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteOneCategory(name: string) {
    try {
      const response = await fetch(`${api.deleteCategoryByName}/${name}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async createOneCategory(payload: any, image: File) {
    const formData = new FormData();
    formData.append('file', image);
    try {
      const response = await fetch(`${api.createCategoryByName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch(`${api.uploadImage}`, {
        method: 'POST',
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async updateOneProduct(name: number, payload: payloadProduct, image: File) {
    if (image != null) {
      const formData = new FormData();
      formData.append('file', image);
      try {
        const response = await fetch(`${api.uploadImage}`, {
          method: 'POST',
          body: formData,
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await fetch(`${this.getAllProductsUri}${name}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteOneProduct(name: number) {
    try {
      const response = await fetch(`${api.getAllProducts}${name}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async createOneProduct(payload: payloadProductCreate, image: File) {
    const formData = new FormData();
    formData.append('file', image);
    try {
      const response = await fetch(`${api.getAllProducts}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
    try {
      const response = await fetch(`${api.uploadImage}`, {
        method: 'POST',
        body: formData,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
