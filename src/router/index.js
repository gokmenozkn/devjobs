import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
