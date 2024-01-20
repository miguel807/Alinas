import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'menu',

    children: [
      {
        path: '/:name',
        name: 'category',
        component: () => import('pages/ProductPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/admin',
    name: 'adminPanel',
    meta: {
      requireAuth: true,
    },
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      {
        path: '/user',
        name: 'userEdit',
        meta: {
          requireAuth: true,
        },
        component: () => import('src/pages/EditUserPage.vue'),
      },
      {
        path: '/category',
        name: 'adminCategory',
        meta: {
          requireAuth: true,
        },
        component: () => import('src/pages/AdminCategoryPage.vue'),
      },
      {
        path: '/products',
        name: 'adminProduct',
        meta: {
          requireAuth: true,
        },
        component: () => import('src/pages/AdminProductPage.vue'),
      },
      {
        path: '/category/:name',
        name: 'adminCategoryName',
        meta: {
          requireAuth: true,
        },
        component: () => import('src/pages/EditAndCreateCategory.vue'),
      },
      {
        path: '/product/:name',
        name: 'adminProductName',
        meta: {
          requireAuth: true,
        },
        component: () => import('src/pages/EditAndCreateProduct.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
export default routes;
