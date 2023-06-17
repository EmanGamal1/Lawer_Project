<template>
    <LoginForm axiosUrl="/api/lawyer_web/login" forget-password-link="/lawyer/forget-password" />
</template>

<script>
import LoginForm from '@/sharedComponents/LoginForm/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
