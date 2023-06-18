<template>
  <login-layout
    title="كـود التفعيــل"
    description="أدخل كود التفعيل الذي وصلك على هاتفـك">
    <div class="verfiyContent">
      <div class="form-group verification-code">
        <input type="text" class="form-control mb-2" id="phone" placeholder="رقــم الهاتــف" v-model="phone">
        <span class="errors">{{ phoneErrorMessage }}</span>
        <input type="text" class="form-control mb-2" id="phone_code" placeholder="كود البلــد" v-model="phone_code">
        <span class="errors">{{ phoneCodeErrorMessage }}</span>
        <input type="text" class="form-control mb-2" id="verification-code" placeholder="كود التفعيــل" v-model="code">
        <span class="errors">{{ codeErrorMessage }}</span>
        <span v-if="showErrorSpan" class="invalidData errors mb-3">{{ showErrorSpanMessage }}</span>
      </div>
      <button class="btn allButtons sendBtn" @click="sendVerificationCode">إرســال</button>
    </div>
  </login-layout>
</template>

<script>
import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue';
import { axiosInstance } from '@/Axios';
import { useField, useForm } from 'vee-validate';
import { phoneValidation, requiredValidation } from '@/validationRules';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginView',
  components: {
    LoginLayout,
    NavBarAuth
  },
  props: ['url', 'redirectRoute'],
  setup(props) {
    const showErrorSpanMessage = ref('');
    const router = useRouter();
    const { handleSubmit } = useForm();
    const {  errorMessage: phoneErrorMessage,
      value: phone,
      handleBlur: phoneBlur
    } = useField('phone', phoneValidation);
    const { errorMessage: phoneCodeErrorMessage,
      value: phone_code,
      handleBlur: phone_codeBlur} = useField('phone_code', requiredValidation);
    const {
      errorMessage: codeErrorMessage,
      value: code,
      handleBlur: codeBlur
    } = useField('code', requiredValidation);
    const showErrorSpan = ref(false);

    const sendVerificationCode = handleSubmit(async () => {
      const requestData = {
        code: code.value,
        phone: phone.value,
        phone_code: phone_code.value
      };

      try {
        const response = await axiosInstance.post(props.url, requestData);
        if (response.data.status === 'success') {
          router.push(props.redirectRoute);
        } else {
          showErrorSpan.value = true;
          showErrorSpanMessage.value = response.data.message;
        }
      } catch (error) {
        console.error(error);
        showErrorSpan.value = true;
        showErrorSpanMessage.value = error.response.data.message;
      }
    });

    return {
      phone, phone_code, code, phone_code,
      showErrorSpan, phoneErrorMessage, phoneCodeErrorMessage, codeErrorMessage, showErrorSpanMessage,
      phoneBlur, phone_codeBlur, codeBlur,
      sendVerificationCode, router
    };
  },
};
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