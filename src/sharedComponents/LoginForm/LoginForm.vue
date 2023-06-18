<template>
  <form @submit.prevent="login">
    <label for="phone">رقـم الهــاتف</label>
    <div class="form-group">
      <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
      <span class="errors">{{ phoneErrorMessage }}</span>
    </div>
    <div class="form-group">
      <label for="phone_code">كود البلــد</label>
      <input type="text" class="form-control" v-model="phone_code" name="phone_code" id="phone_code" placeholder="كود البلـــد" />
      <span class="errors">{{ phoneCodeErrorMessage }}</span>
    </div>
    <div class="form-group">
      <label for="password">كلمــة المرور</label>
      <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
      <span class="errors">{{ passwordErrorMessage }}</span>
    </div>
    <span class="invalidLogin errors my-3" v-if="InvalidLoginSpan">{{ showErrorSpanMessage }}</span>
    <br/>
    <input type="submit" class="btn allButtons form-control" value="دخــول" />
    <router-link :to="forgetPasswordLink" class="routeSpan">نسيــت كلمة المــرور؟</router-link>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate';
import { phoneValidation, requiredValidation } from '@/validationRules';
import { useRouter } from 'vue-router';
import { axiosInstance } from '@/Axios.js';
import { ref } from 'vue';

export default {
  props: {
    forgetPasswordLink: {
      type: String,
      default: '/forget-password',
    },
  },
  setup(props) {
    const showErrorSpanMessage = ref('');
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
    } = useField('phone_code', requiredValidation);

    const {
      errorMessage: passwordErrorMessage,
      value: password,
      handleBlur: passwordBlur,
    } = useField('password', requiredValidation);

    const InvalidLoginSpan = ref(false);

    const login = handleSubmit(async () => {
      try {
        const requestData = {
          phone: phone.value,
          phone_code: phone_code.value,
          password: password.value,
        };

        const response = await axiosInstance.post('/api/client_web/login', requestData);

        if (response.status === 200) {
          const token = response.data.data.token;
          localStorage.setItem('token', token);
          // Check if login is valid by checking if token is returned
          if (token) {
            router.push('/');
          } else {
            console.log('Invalid login credentials');
            InvalidLoginSpan.value = true;
          }
        } else {
          console.log('Invalid login credentials');
          InvalidLoginSpan.value = true;
        }
      } catch (error) {
        console.log('Error occurred during login:', error);
        InvalidLoginSpan.value = true;
        showErrorSpanMessage.value = error.response.data.message;
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
      InvalidLoginSpan,
      showErrorSpanMessage
    };
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}
</style>