<template>
  <login-layout
  title="تسجيــل حســاب جديـد"
  description="أهلا بك في موقعنا">
  <form @submit.prevent="submitForm">
    <label for="full_name">الاســم</label>
    <input type="text" v-model="full_name" class="form-control" id="full_name" placeholder="اسم المستخدم" />
    <label for="email">البريد الالكتروني</label>
    <input type="email" v-model="email" class="form-control" id="email" placeholder="البريد الإلكتروني" />
    <label for="phone">رقم الهاتف</label>
     <input type="text" v-model="phone" class="form-control" id="phone" placeholder="رقم الهاتف" />
        <label for="phone_code">كود</label>
     <input type="text" v-model="phone_code" class="form-control" id="phone_code" placeholder="كود رقم الهاتف" />
    <div class="password-input">
      <label for="password">كلمة المرور</label>
      <input :type="passwordFieldType" v-model="password" class="form-control" id="password" placeholder="كلمة المرور" />
      <font-awesome-icon class="password-toggle" icon="eye" @click="togglePasswordVisibility" />
    </div>
    <div class="password-input">
      <label for="password_confirmation">كلمة المرور</label>
      <input :type="passwordConfirmFieldType" v-model="password_confirmation" class="form-control" id="password_confirmation" placeholder="تأكيد كلمة المرور" />
      <font-awesome-icon class="password-toggle" icon="eye" @click="toggleConfirmPasswordVisibility" />
    </div>
    <input type="submit" class="form-control btn allButtons" value="إنشــاء حســاب جديد" />
    <p class="text-center">تمتلك حســاب بالفعل؟ 
      <router-link to="/login" class="routeSpan">تسجيـل الدخول</router-link>
    </p>
    </form>
  </login-layout>
</template>

<script>
import LoginLayout from '@/views/LoginLayout/LoginLayout.vue'
import LoginUser from '@/components/LoginUser/LoginUser.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import {axiosInstance} from '@/Axios.js';
import { useRouter } from 'vue-router';
import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue'

export default {
  name: "LoginView",
  data() {
    return {
      passwordFieldType: "password",
      passwordConfirmFieldType: "password",
      full_name: '',
      email: '',
      phone: '',
      phone_code:'',
      password: '',
      password_confirmation: '',
      responseData: null
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
    toggleConfirmPasswordVisibility() {
      this.passwordConfirmFieldType = this.passwordConfirmFieldType === "password_confirmation" ? "text" : "password_confirmation";
    },
    submitForm() {
      const payload = {
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        phone_code: this.phone_code,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      axiosInstance.post('/api/client_web/register', payload)
        .then(response => {
          this.responseData = response.data;
          this.$router.push('/verfication');
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  components: {
    LoginLayout,
    LoginUser,
    FontAwesomeIcon,
    NavBarAuth
  },
}
</script>

<style>
.list-item{
    list-style: none;
    display: inline-block;
}
.loginContent{
    padding: 16%;
}
.loggedPerson{
    border: 2px solid #EDF6FD;
    border-radius: 10px;
    text-align: center;
    width: 170px;
    height: 120px;
    padding: 10px;
}
.loggedPerson.selected {
  border-color: orange;
}
.loggedPersonContainer{
    justify-content: space-around;
}
input{
  margin-bottom: 20px;
}
.password-input {
  position: relative;
}
.password-toggle {
  position: absolute;
  right: 90%;
  top: 55%;
  cursor: pointer;
}
</style>