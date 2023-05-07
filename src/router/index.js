import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WaitView from "../views/WaitView.vue";
import QuestionView from "../views/QuestionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wait",
      name: "wait",
      component: WaitView,
    },
    {
      path: "/question",
      name: "question",
      component: QuestionView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
