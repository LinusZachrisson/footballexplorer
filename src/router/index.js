import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "LoginUser",
    component: () => import("../views/LoginUser.vue"),
  },
  {
    path: "/register",
    name: "RegisterUser",
    component: () => import("../views/RegisterUser.vue"),
  },
  {
    path: "/personalpage",
    name: "UserPage",
    component: () => import("../views/UserPage.vue"),
  },
  {
    path: "/savedstadiums",
    name: "SavedStadiums",
    component: () => import("../views/SavedStadiums.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
