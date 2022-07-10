import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import NotFound from "../views/NotFound.vue";
import RestaurantS from "../views/RestaurantS.vue";

Vue.use(VueRouter);

// VueRouter??
const router = new VueRouter({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/restaurants",
    },
    {
      path: "/signin",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "sign-up",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: RestaurantS,
    },
    {
      path: "/restaurants/feeds",
      name: "restaurants-feeds",
      component: () => import("../views/RestaurantsFeeds.vue"),
    },
    {
      path: "/restaurants/top",
      name: "restaurants-tops",
      component: () => import("../views/RestaurantsTop.vue"),
    },
    {
      path: "/restaurants/:id",
      name: "restaurant",
      component: () => import("../views/RestauranT.vue"),
    },
    {
      path: "/restaurants/:id/dashboard",
      name: "dashboard",
      component: () => import("../views/RestaurantDashboard.vue"),
    },
    {
      path: "/users/top",
      name: "users-top",
      component: () => import("../views/UsersTop.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("../views/UseR.vue"),
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export default router;
