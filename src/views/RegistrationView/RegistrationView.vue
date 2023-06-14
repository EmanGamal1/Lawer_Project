<script>
import LoginUser from '@/components/LoginUser/LoginUser.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default {
  name: "LoginView",
  data() {
    return {
      passwordFieldType: "password",
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
    submitForm() {
      const payload = {
        full_name: this.full_name,
        email: this.email,
        phone: this.phone,
        phone_code: this.phone_code,
        password: this.password,
        password_confirmation: this.password_confirmation
      };
      axios.post('http://lawyer.phpv8.aait-d.com/api/client_web/register', payload)
        .then(response => {
          this.responseData = response.data;
          console.log(this.responseData);
          // Handle the response as needed
        })
        .catch(error => {
          console.error(error);
          // Handle the error as needed
        });
    }
  },
  components: {
    LoginUser,
    FontAwesomeIcon
  },
}
</script>


<template>
  <main>
    <div class="row">
        <div class="col-6">
            <nav>
              <div class="row">
                <div class="col-6">
                    <img src="./../../assets/images/icons/logo.png" alt="client" />
                </div>
                <div class="col-6 align-left">
                  <div class="row">
                    <div class="col-1">
                      <img src="./../../assets/images/icons/langIcon.png" alt="client" />
                    </div>
                    <div class="col-1">
                      <p>Ar</p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div class="container-fluid loginContent">
          <h4>تسجيــل حســاب جديـد</h4>
          <p>أهلا بك في موقعنا</p>
          <div class="container mt-5">
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
                <input :type="passwordFieldType" v-model="password_confirmation" class="form-control" id="password_confirmation" placeholder="تأكيد كلمة المرور" />
                <font-awesome-icon class="password-toggle" icon="eye" @click="togglePasswordVisibility" />
              </div>
              <input type="submit" class="form-control btn btn-warning" value="إنشــاء حســاب جديد" />
              <p class="text-center">تمتلك حســاب بالفعل؟ <span class="">
                <router-link to="/login">تسجيـل الدخول</router-link>
              </span></p>
            </form>
          </div>
            </div>
        </div>
        <div class="col-6 loginAvatar">
            <!-- <p>right</p> -->
        </div>
    </div>
  </main>
</template>

<style>
.loginAvatar{
    background-image: url("./../../assets/images/loginAvatar.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.createAcountSpan{
    color: orange;
}
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