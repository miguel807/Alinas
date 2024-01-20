export default interface Category {
  name: string;
  photo: string;
  description: string;
  count_products: number;
}

export default interface Product {
  name: string;
  photo: string;
  description: string;
  price: number;
  grm: number;
  ingredients: string;
  id_category: number;
  isVisible?: boolean;
}

export default interface ProductCart {
  name: string;
  photo: string;
  price: number;
  counts: number;
  pricePerProduct: number;
}
