import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/products/:name',
        name: 'products',
        component: () => import('pages/ProductsPage.vue'),
      },
      {
        path: '/orders',
        name: 'order',
        component: () => import('pages/CartPage.vue'),
      },
    ],
  },
  /*
  {
    path: '/admin',
    name: 'admin',
    component: () => import('pages/AdminPage.vue'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('pages/AdminCategory.vue'),
  },
  {
    path: '/EditCategory/',
    name: 'editCategory',
    component: () => import('pages/EditCategory.vue'),
  },
*/
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
