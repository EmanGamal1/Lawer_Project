<template>
  <login-layout
  title="مرحبــًا,"
  description="أهلا مجــددًا.">
    <login-user />
  </login-layout>
</template>

<script>
import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
import LoginUser from '@/components/LoginUser/LoginUser.vue'
import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue'

export default {
    name: "LoginView",
    components:{
        LoginLayout,
        LoginUser,
        NavBarAuth
    }
}
</script>