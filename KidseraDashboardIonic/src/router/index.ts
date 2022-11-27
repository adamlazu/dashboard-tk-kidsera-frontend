import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/pages/Dashboard",
  },
  {
    path: "/SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/pages/Dashboard",
    component: () => import("../views/DashboardPage.vue"),
  },
  {
    path: "/pages/PesertaDidik",
    component: () => import("../views/PesertaDidikPage.vue"),
  },
  // {
  //   path: "/pages/TenagaPendidikan",
  //   component: () => import("../views/TenagaPendidikanPage.vue"),
  // },
  {
    path: "/pages/:id",
    component: () => import("../views/Pages.vue"),
  },
];
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
