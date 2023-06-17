<template>
  <ResetPasswordForm axios-url="/api/client_web/reset_password" next-link="/login" />
</template>

<script>
import ResetPasswordForm from '@/sharedComponents/ResetPasswordForm/ResetPasswordForm.vue'
export default {
  components: {
    ResetPasswordForm
  }
}
</script>
