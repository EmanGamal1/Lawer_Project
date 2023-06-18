<template>
    <ForgetPasswordForm axios-url="/api/lawyer_web/send_code" next-link="/lawyer-check-code" />
</template>

<script>
import ForgetPasswordForm from '@/sharedComponents/ForgetPasswordForm/ForgetPasswordForm.vue'
export default {
    components: {
        ForgetPasswordForm
    }
}
</script>