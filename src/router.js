import { createWebHistory, createRouter } from "vue-router";

  const routes =  [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/Career",
      alias: "/Career",
      name: "Career",
      component: () => import("./components/Career")
    },
    {
      path: "/Blog",
      alias: "/Blog",
      name: "Blog",
      component: () => import("./components/Blog")
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;