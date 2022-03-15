import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';

Vue.use(Router);


const router = new Router({
  routes: [
    {
      path: "",
      name: "influencers",
      component: () => import("./components/HelloWorld.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./components/register.vue"),
    },
  ]
});

Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
