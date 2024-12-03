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
    },
    {
      path: "/login",
      alias: "/login",
      name: "login",
      component: () => import("./components/login")
    },
    {
      path: "/MyProfile",
      alias: "/MyProfile",
      name: "MyProfile",
      component: () => import("./components/MyProfile")
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;