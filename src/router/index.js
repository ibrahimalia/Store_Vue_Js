import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayouts from "../views/Layouts/HomeLayouts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: HomeLayouts,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/Home/Home.vue"),
      },
      {
        path: "shop",
        name: "Shop",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home/Shop.vue"),
      },
      {
        path: "shop/:slug",
        name: "Collection",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Home/Collection.vue"
          ),
        props: true,
      },
      {
        path: "shop/:slug/:name",
        name: "Type_Collection",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/Home/TypeCollection.vue"
          ),
        props: true,
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
        props: true,
      },
    ],
  },
  {
    path: "/restaurants/:slug",
    name: "Restaurants",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Restaurants.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Error.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// global middleware
router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = `${process.env.VUE_APP_TITLE} | ${to.name}`;
  } else {
    document.title = `${process.env.VUE_APP_TITLE}`;
  }
  next();
});
export default router;
