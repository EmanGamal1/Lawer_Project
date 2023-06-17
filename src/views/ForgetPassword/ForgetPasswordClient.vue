<template>
  <ForgetPasswordForm axios-url="/api/client_web/send_code" next-link="/check-code" />
</template>

<script>
import ForgetPasswordForm from '@/sharedComponents/ForgetPasswordForm/ForgetPasswordForm.vue'
export default {
  components: {
    ForgetPasswordForm
  }
}
</script>