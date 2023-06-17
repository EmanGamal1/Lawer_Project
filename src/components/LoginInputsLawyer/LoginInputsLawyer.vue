<template>
    <LoginForm axiosUrl="/api/lawyer_web/login" />
</template>

<script>
import LoginForm from '@/sharedComponents/LoginForm/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
