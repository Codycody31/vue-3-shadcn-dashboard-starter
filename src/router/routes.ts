import Overview from "@/views/Overview.vue";
import Employee from "@/views/employee/Employee.vue";
import Product from "@/views/product/Product.vue";
import NotFound from "@/views/NotFound.vue";

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
        component: Overview,
        meta: {
          title: "Overview",
        },
      },
      {
        path: "employee",
        name: "employee",
        component: Employee,
        meta: {
          title: "Employees",
        },
      },
      {
        path: "product",
        name: "product",
        component: Product,
        meta: {
          title: "Products",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    meta: {
      title: "Not Found",
      layout: "blank",
    },
  },
];

export default routes;
