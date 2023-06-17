<template>
    <form @submit.prevent="login">
      <label for="phone">رقـم الهــاتف</label>
      <div class="form-group">
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <span class="errors">{{ phoneErrorMessage }}</span>
      </div>
      <div class="form-group">
        <label for="phone_code">كود الدولـــة</label>
        <input type="text" class="form-control" v-model="phone_code" name="phone_code" id="phone_code" placeholder="كود رقـم الهــاتف" />
        <span class="errors">{{ phoneCodeErrorMessage }}</span>
      </div>
      <div class="form-group">
        <label for="password">كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
        <span class="errors">{{ passwordErrorMessage }}</span>
      </div><br/>
      <input type="submit" class="btn allButtons form-control" value="دخــول" />
      <router-link to="/forget-password" class="routeSpan">نسيــت كلمـة المــرور؟</router-link>
    </form>
  </template>
  
  <style scoped>
  label {
    margin-top: 20px;
  }
  </style>
  
  <script>
  import { useField, useForm } from 'vee-validate';
  import { countryCodeValidation, phoneValidation, passwordValidation } from '@/validationRules';
  import { useRouter } from 'vue-router';
  
  export default {
    props: {
      phoneErrorMessage: {
        type: String,
        default: '',
      },
      phoneCodeErrorMessage: {
        type: String,
        default: '',
      },
      passwordErrorMessage: {
        type: String,
        default: '',
      },
      axiosUrl: {
        type: String,
        default: '/api/client_web/login', // Default URL
      },
    },
    setup(props) {
      const router = useRouter();
  
      const { handleSubmit, resetForm } = useForm();
  
      const {
        errorMessage: phoneErrorMessage,
        value: phone,
        handleBlur: phoneBlur,
      } = useField('phone', phoneValidation);
  
      const {
        errorMessage: phoneCodeErrorMessage,
        value: phone_code,
        handleBlur: phoneCodeBlur,
      } = useField('phone_code', countryCodeValidation);
  
      const {
        errorMessage: passwordErrorMessage,
        value: password,
        handleBlur: passwordBlur,
      } = useField('password', passwordValidation);
  
      const login = handleSubmit(async () => {
        try {
          const requestData = {};
  
          if (phone && phone.value) {
            requestData.phone = phone.value;
          }
  
          if (phone_code && phone_code.value) {
            requestData.phone_code = phone_code.value;
          }
  
          if (password && password.value) {
            requestData.password = password.value;
          }
  
          const response = await axiosInstance.post(props.axiosUrl, requestData);
  
          if (response.status === 200) {
            const token = response.data.data.token;
            localStorage.setItem('token', token);
            router.push('/');
          } else {
            console.log('Failed to login');
          }
        } catch (error) {
          console.log('Error occurred during login:', error);
        }
      });
  
      return {
        phoneErrorMessage,
        phone,
        phoneBlur,
        phoneCodeErrorMessage,
        phone_code,
        phoneCodeBlur,
        passwordErrorMessage,
        password,
        passwordBlur,
        login,
        router,
      };
    },
    data() {
      return {};
    },
  };
  </script>
  