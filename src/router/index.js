import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login";
// eslint-disable-next-line no-unused-vars
import Register from "../views/Register";
// eslint-disable-next-line no-unused-vars
import ChatFeed from "../views/ChatFeed";
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

    component: () =>
      import( "../views/Register")
  },
  {
    path: "/ChatFeed",
    name: "ChatFeed",

    component: () =>
        import( "../views/ChatFeed")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;


