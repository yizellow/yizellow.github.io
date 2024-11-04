import { createRouter, createWebHistory } from "vue-router";
import ThreeDModelView from "@/views/ThreeDModelView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "3D model Projects",
      component: ThreeDModelView,
    },
  ],
});
export default router;
