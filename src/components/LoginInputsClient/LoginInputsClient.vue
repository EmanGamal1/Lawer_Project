<template>
    <LoginForm axiosUrl="/api/client_web/login" />
</template>

<script>
import LoginForm from '@/sharedComponents/Login/Login.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
