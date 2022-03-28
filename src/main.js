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
    {
      path: "/search",
      name: "register",
      component: () => import("./components/SearchMentor.vue"),
    },
    {
      path: "/voiceCall",
      name: "voice-call",
      component: () => import("./components/VoiceCall.vue"),
    },
    {
      path: "/AddBlog",
      name: "add-blog",
      component: () => import("./components/AddBlog.vue"),
    },
    {
      path: "/Appointment",
      name: "appointment",
      component: () => import("./components/Appointment.vue"),
    },
    {
      path: "/BlankPage",
      name: "blankpage",
      component: () => import("./components/BlankPage.vue"),
    },
    {
      path: "/BlogDetail",
      name: "blogdetail",
      component: () => import("./components/BlogDetail.vue"),
    },
    {
      path: "/BlogGrid",
      name: "bloggrid",
      component: () => import("./components/BlogGrid.vue"),
    },
    {
      path: "/BlogList",
      name: "bloglist",
      component: () => import("./components/BlogList.vue"),
    },
    {
      path: "/Profile",
      name: "profile",
      component: () => import("./components/Profile.vue"),
    },
    {
      path: "/Blog",
      name: "blog",
      component: () => import("./components/Blog.vue"),
    },
    {
      path: "/BookingSuccess",
      name: "bookingsuccess",
      component: () => import("./components/BookingSuccess.vue"),
    },
    {
      path: "/Booking",
      name: "booking",
      component: () => import("./components/BookingSuccess.vue"),
    },

  ]
});

Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
