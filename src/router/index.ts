import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: () => import("@/components/auth/authPage.vue"),
    children: [
      {
        path: "login",
        name: "Login 1",
        component: () => import("@/components/auth/loginComponent.vue"),
        meta: {
          title: "Login Page",
        },
      },
    ],
  },
  {
    path: "/",
    name: "home",
    redirect: "/dashboard",
    component: () => import("@/components/body/BodyComponent.vue"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/components/home/MainPage.vue"),
      },
      {
        path: "/education",
        name: "education",
        component: () =>
          import("@/components/education/EducationComponent.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
