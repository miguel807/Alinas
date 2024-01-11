import { api } from 'src/config/api';
import Category from 'src/types/types';
import Product from 'src/types/types';
import { ref, Ref } from 'vue';

export default class FetchData {
  private categories: Ref<Category[]>;
  private getAllCategoriesUri: string;

  private productsByCategory: Ref<Product[]>;
  private getProductByCategoryUri: string;

  private getCategoryByName: Ref<Category>;
  private getCategoryByNameUri: string;

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

    this.getAllCategoriesUri = api.getAllCategories;
    this.getProductByCategoryUri = api.getProductsByCategory;
    this.getCategoryByNameUri = api.getCategoryByName;
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
  async fetchAllCategories() {
    try {
      const res = await fetch(this.getAllCategoriesUri);
      this.categories.value = await res.json();
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

  async updateOneCategory(name: string, payload: any) {
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
}
