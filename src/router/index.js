import { createRouter, createWebHistory } from "vue-router";
import common from "./common";
import admin from "./admin";
import member from "./member";
import counseling from "./counseling";
import test from "./test";
import welfareProgram from "./welfareProgram";
import cs from "./cs";
import PageHome from "@/views/home/PageHome.vue";
import PageHomeLogin from "@/views/home/PageHomeLogin.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: () => import("../components/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "PageHome",
        component: PageHome,
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/home/PageAbout.vue"),
      },
      {
        path: "/loginhome",
        name: "PageHomeLogin",
        component: PageHomeLogin,
      },
    ],
  },
  {
    path: "/",
    name: "mainNoLayout",
    component: () => import("../components/layouts/NoNavLayout.vue"),
    children: [
      {
        path: "/special/",
        name: "SpecialHome",
        component: () => import("../views/special/SpecialHome.vue"),
      },
      {
        path: "/special/speech",
        name: "SpecialSpeech",
        component: () => import("../views/special/SpecialSpeech.vue"),
      },
      {
        path: "/special/music",
        name: "SpecialMusic",
        component: () => import("../views/special/SpecialMusic.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...routes,
    ...admin,
    ...member,
    ...counseling,
    ...test,
    ...welfareProgram,
    ...common,
    ...cs,
  ],
});

export default router;
