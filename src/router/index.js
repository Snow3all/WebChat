import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Login",
    component: Home
  },
  {
    path: "/Register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;


