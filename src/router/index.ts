import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/RegistrationView/RegistrationView.vue"),
    },
    {
      path: "/verfication",
      name: "verfication",
      component: () => import("../views/VerfiyPhone/VerfiyPhone.vue"),
    },
    {
      path: "/forget-password",
      name: "forget-password",
      component: () =>
        import("../views/ForgetPassword/ForgetPasswordClient.vue"),
    },
    {
      path: "/lawyer/forget-password",
      name: "lawyer-forget-password",
      component: () =>
        import("../views/ForgetPassword/ForgetPasswordLawyer.vue"),
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: () => import("../views/ResetPassword/ResetPasswordClient.vue"),
    },
    {
      path: "/lawyer-reset-password",
      name: "lawyer-reset-password",
      component: () => import("../views/ResetPassword/ResetPasswordLawyer.vue"),
    },
    {
      path: "/user-profile",
      name: "user-profile",
      component: () => import("../views/UserProfile/UserProfile.vue"),
    },
    {
      path: "/check-code",
      name: "check-code",
      component: () =>
        import("../views/CheckCodeForgetPass/CheckCodeClient.vue"),
    },
    {
      path: "/lawyer/check-code",
      name: "lawyer-check-code",
      component: () =>
        import("../views/CheckCodeForgetPass/CheckCodeLawyer.vue"),
    },
  ],
});

export default router;
