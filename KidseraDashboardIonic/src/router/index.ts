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
  {
    path: "/pages/TenagaKependidikan",
    component: () => import("../views/TenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/TambahTenagaKependidikan",
    component: () => import("../views/TambahTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/Sarpras",
    component: () => import("../views/SarprasPage.vue"),
  },
  {
    path: "/pages/:id",
    component: () => import("../views/Pages.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras",
    component: () => import("../views/DetailSarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras/TambahFasilitasSarpras",
    component: () => import("../views/TambahFasilitasSarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras/EditSarpras",
    component: () => import("../views/EditSarprasPage.vue"),
  },
  {
    path: "/pages/sapras",
    component: () => import("../views/SarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/detail",
    component: () => import("../views/DetailSarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/TambahSarprasRuangan",
    component: () => import("../views/TambahSarprasRuanganPage.vue"),
  },
  {
    path: "/pages/rombonganbelajar",
    component: () => import("../views/RombonganBelajarPage.vue"),
  },
  {
    path: "/pages/rombonganbelajar/TambahRombonganBelajar",
    component: () => import("../views/TambahRombonganBelajarPage.vue"),
  },
  {
    path: "/pages/rombonganbelajar/TahunAjaranRombonganBelajar",
    component: () => import("../views/TahunAjaranRombonganBelajarPage.vue"),
  },
  {
    path: "/pages/rombonganbelajar/TahunAjaranRombonganBelajar/detail",
    component: () => import("../views/DetailRombelPage.vue"),
  },
];
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
