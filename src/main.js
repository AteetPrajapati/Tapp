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
      component: () => import("./components/Booking.vue"),
    },
    {
      path: "/BookingsMentee",
      name: "bookingsmentee",
      component: () => import("./components/BookingsMentee.vue"),
    },
    {
      path: "/Bookings",
      name: "bookings",
      component: () => import("./components/Bookings.vue"),
    },
    {
      path: "/ChangePassword",
      name: "changepassword",
      component: () => import("./components/ChangePassword.vue"),
    },
    {
      path: "/ChatMentee",
      name: "chatmentee",
      component: () => import("./components/ChatMentee.vue"),
    },
    {
      path: "/Chat",
      name: "chat",
      component: () => import("./components/Chat.vue"),
    },
    {
      path: "/ChackOut",
      name: "chackout",
      component: () => import("./components/ChackOut.vue"),
    },
    {
      path: "/Components",
      name: "components",
      component: () => import("./components/Components.vue"),
    },
    {
      path: "/DashboardMentee",
      name: "dashbordmentee",
      component: () => import("./components/DashboardMentee.vue"),
    },
    {
      path: "/Dashboard",
      name: "dashboard",
      component: () => import("./components/Dashboard.vue"),
    },
    {
      path: "/EditBlog",
      name: "editblog",
      component: () => import("./components/EditBlog.vue"),
    },
    {
      path: "/Favourites",
      name: "favourites",
      component: () => import("./components/Favourites.vue"),
    },
    {
      path: "/ForgotPassword",
      name: "ForgotPassword",
      component: () => import("./components/ForgotPassword.vue"),
    },
    {
      path: "/InvoiceView",
      name: "invoiceview",
      component: () => import("./components/InvoiceView.vue"),
    },
    {
      path: "/Invoices",
      name: "invoices",
      component: () => import("./components/Invoices.vue"),
    },
    {
      path: "/MapGrid",
      name: "mapgrid",
      component: () => import("./components/MapGrid.vue"),
    },
    {
      path: "/MenteeList",
      name: "menteelist",
      component: () => import("./components/MenteeList.vue"),
    },
    {
      path: "/MentorRegister",
      name: "mentorregister",
      component: () => import("./components/MentorRegister.vue"),
    },
    {
      path: "/ProfileMentee",
      name: "profilementee",
      component: () => import("./components/ProfileMentee.vue"),
    },
    {
      path: "/ProfileSettingsMentee",
      name: "profilesettingsmentee",
      component: () => import("./components/ProfileSettingsMentee.vue"),
    },
    {
      path: "/ProfileSettings",
      name: "profilesettings",
      component: () => import("./components/ProfileSettings.vue"),
    },
    {
      path: "/Reviews",
      name: "reviews",
      component: () => import("./components/Reviews.vue"),
    },
    {
      path: "/ScheduleTimings",
      name: "scheduletimings",
      component: () => import("./components/ScheduleTimings.vue"),
    },
    {
      path: "/VideoCall",
      name: "videocall",
      component: () => import("./components/VideoCall.vue"),
    },


  ]
});

Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
