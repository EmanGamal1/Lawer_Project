<template>
    <login-layout
      title="كـود التفعيــل"
      description="أدخل كود التفعيل الذي وصلك على هاتفـك"
    >
      <div class="verfiyContent">
        <div class="form-group verification-code">
          <input type="text" class="form-control" id="phone-code" placeholder="رقــم الهاتــف" v-model="phone">
          <input type="text" class="form-control" id="phone-code" placeholder="كود البلــد" v-model="phone_code">
            <input type="text" class="form-control" id="verification-code" placeholder="كود التفعيــل" v-model="code">
        </div>
        <button class="btn allButtons sendBtn" @click="sendVerificationCode">إرســال</button>
      </div>
    </login-layout>
  </template>
  
  <script>
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue';
  import { axiosInstance } from '@/Axios';
  
  export default {
    name: 'LoginView',
    components: {
      LoginLayout,
      NavBarAuth
    },
    props: ['url', 'redirectRoute'],
  
    data() {
      return {
        code: '1111',
        phone: '',
        phone_code: ''
      };
    },
    methods: {
      sendVerificationCode() {
        const requestData = {
          code: this.code,
          phone: this.phone,
          phone_code: this.phone_code
        };
  
        axiosInstance.post(this.url, requestData)
          .then(response => {
            this.$router.push( this.redirectRoute );
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  .verfiyContent {
    text-align: center;
    height: 45vh;
  }
  .sendBtn {
    margin-top: 3%;
    margin-bottom: 2%;
    width: 50%;
  }
  </style>
  