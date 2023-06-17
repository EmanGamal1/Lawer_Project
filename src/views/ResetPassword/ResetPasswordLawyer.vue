<template>
    <ResetPasswordForm axios-url="/api/lawyer_web/reset_password" next-link="/lawyer/login" />
  </template>
  
  <script>
  import ResetPasswordForm from '@/sharedComponents/ResetPasswordForm/ResetPasswordForm.vue'
  export default {
    components: {
      ResetPasswordForm
    }
  }
  </script>
  