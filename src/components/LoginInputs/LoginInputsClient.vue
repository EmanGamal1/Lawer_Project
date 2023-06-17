<template>
    <LoginForm axiosUrl="/api/client_web/login" forget-password-link="/forget-password" />
</template>

<script>
import LoginForm from '@/sharedComponents/LoginForm/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
