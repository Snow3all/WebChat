import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Login";
// eslint-disable-next-line no-unused-vars
import Register from "../views/Register";
// eslint-disable-next-line no-unused-vars
import ChatFeed from "../views/ChatFeed";
import Login2 from "../views/Login2";
Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Login",
    component: Home
  },
  {
    path: "/login2",
    name: "Login2",
    component: Login2
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


