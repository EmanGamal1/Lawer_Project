<template>
    <login-layout
      title="كـود التفعيــل"
      description="أدخل كود التفعيل الذي وصلك على هاتفـك"
    >
      <div class="verfiyContent">
        <div class="form-group verification-code">
          <input type="text" class="form-control" id="phone-code" v-model="phone">
          <input type="text" class="form-control" id="phone-code" v-model="phone_code">
          <div class="verification-code-inputs">
            <input type="text" class="form-control" id="verification-code" v-model="code">
          </div>
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
  .verification-code-inputs {
    margin: auto;
    display: flex;
    width: 50%;
    height: 50px;
    margin-top: 10%;
    margin-bottom: 3%;
  }
  .verification-code-inputs input {
    margin-right: 10px;
    text-align: center;
  }
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
  