<template>
    <div class="container">
        <nav class="navbar d-flex">
        <router-link to="/"><img src="/src/assets/images/icons/logoSite.png" alt="client in Lawyer app" /></router-link>
        <div class="d-flex">
            <ul class="navbarLi">
                <router-link to="/login" class="routeSpan" v-if="!isLoggedIn"><li>دخــول</li></router-link>
                <router-link to="/signup" class="routeSpan" v-if="!isLoggedIn"><li>إنشـاء حساب</li></router-link>
                <router-link to="/user-profile" class="routeSpan" v-if="isLoggedIn"><li>الصفحـة الشخصيـــة</li></router-link>
                <div class="routeSpan" v-if="isLoggedIn" @click="logout"><li>خــروج</li></div>
            </ul>
        </div>
        </nav>
        <hr />
    </div>
</template>

<script>
import {axiosInstance} from '@/Axios.js';
import jwtDecode from 'jwt-decode';

export default {
  name: 'MyComponent',
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  },
  methods:{
    async logout() {
      try {
        const token= localStorage.getItem('token');
        const decodedTokenIss = jwtDecode(token).iss;
        
        let logoutUrl = '';
        if (decodedTokenIss.includes('/api/client_web/login')) {
          logoutUrl = '/api/client_web/logout';
        } else if (decodedTokenIss.includes('/api/lawyer_web/login')) {
          logoutUrl = '/lawyer/logout';
        }
        await axiosInstance.post(logoutUrl);
        localStorage.removeItem('token');
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.navbar{
    justify-content: space-between;
}
.navbarLi{
    list-style: none;
    display: flex;
}
.navbar li{
    margin-right: 20px;
}
</style>