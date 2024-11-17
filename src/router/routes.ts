const routes = [
  {
    path: "/",
    redirect: "/dashboard/overview",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/overview",
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("@/pages/overview.vue"),
        meta: {
          title: "Overview",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/pages/notFound.vue"),
    meta: {
      title: "Not Found",
      layout: "blank",
    },
  },
];

export default routes;
