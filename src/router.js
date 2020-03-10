import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import HomePage from "@/pages/HomePage";
import ProductPage from "@/pages/ProductPage";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/pd/:slug",
      name: "product",
      component: ProductPage
    }
  ]
});
