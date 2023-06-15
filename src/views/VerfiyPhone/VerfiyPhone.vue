<template>
    <login-layout
      title="كـود التفعيــل"
      description="أدخل كود التفعيل الذي وصلك على هاتفـك"
    >
      <div class="form-group verification-code">
        <div class="verification-code-inputs">
          <input type="text" class="form-control" id="verification-code-1" maxlength="1">
          <input type="text" class="form-control" id="verification-code-2" maxlength="1">
          <input type="text" class="form-control" id="verification-code-3" maxlength="1">
          <input type="text" class="form-control" id="verification-code-4" maxlength="1">
        </div>
      </div>
      <button class="btn allButtons">إرســال</button>
      <div>
        <p>إذا لم يصلك كود، <span class="routeSpan">أعد الإرســال</span></p>
        <p class="counter">{{ counter }}</p>
      </div>
    </login-layout>
  </template>
  
  <script>
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue';
  
  export default {
    name: 'LoginView',
    components: {
      LoginLayout,
      NavBarAuth
    },
    data() {
      return {
        counter: '00:30'
      }
    },
    mounted() {
      this.startCountdown();
    },
    methods: {
      startCountdown() {
        let seconds = 30;
        const intervalId = setInterval(() => {
          seconds--;
          if (seconds < 0) {
            clearInterval(intervalId);
            this.counter = '';
          } else {
            const formattedSeconds = seconds.toString().padStart(2, '0');
            this.counter = `00:${formattedSeconds}`;
          }
        }, 1000);
      }
    }
  }
  </script>
  
  <style scoped>
  .verification-code-inputs {
    display: flex;
    width: 50%;
    height: 50px;
    margin-bottom: 3%;
  }
  .verification-code-inputs input {
    flex: 1;
    margin-right: 10px;
    text-align: center;
  }
  .verification-code-inputs input:last-child {
    margin-right: 0;
  }
  </style>