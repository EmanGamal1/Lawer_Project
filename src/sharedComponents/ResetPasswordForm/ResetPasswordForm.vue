<template>
    <login-layout title="تغييــر كلمــة المــرور">
      <form class="formForget" @submit.prevent="resetPassword">
        <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <span class="errors">{{ phoneErrorMessage }}<br /></span>
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone_code" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <span class="errors">{{ phoneCodeErrorMessage }}<br /></span>
        <label for="code">الكــود</label>
        <input type="text" class="form-control" v-model="code" name="code" id="code" placeholder="الكـود" />
        <span class="errors">{{ codeErrorMessage }}<br /></span>
        <label for="password">كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
        <span class="errors">{{ passwordErrorMessage }}<br /></span>
        <label for="password_confirmation">تأكيـد كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password_confirmation" name="password_confirmation" id="password_confirmation" placeholder="تأكيـد كلمــة المرور" />
        <span class="errors">{{ confirmPasswordErrorMessage }}<br /></span>
        <span class="invalidResetPassword errors" v-if="showErrorSpan">{{ showErrorSpanMessage }}</span>
        <input type="submit" class="btn allButtons form-control" value="حفـظ" />
      </form>
      <Modal
        v-if="showSuccessModal"
        :title="'تمـــت'"
        message="تم تغييــر كلمة المرور بنجاح"
        :next-button-text="'تسجيــل الدخول'"
        :next-link="nextLink"
        @close-modal="closeModal"
      />
    </login-layout>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { axiosInstance } from '@/Axios.js';
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  import Modal from '@/sharedComponents/Modal/Modal.vue';
  import { useField, useForm } from 'vee-validate';
  import { requiredValidation, phoneValidation, confirmedValidation } from '@/validationRules';
  
  export default {
    name: 'ForgetPassword',
    components: {
      LoginLayout,
      Modal,
    },
    props: {
      axiosUrl: {
        type: String,
        required: true,
      },
      nextLink: {
        type: String,
        default: '/login',
      },
    },
    setup(props) {
      const showErrorSpanMessage = ref('');
      const showSuccessModal = ref(false);
      const showErrorSpan = ref(false);

      const { handleSubmit } = useForm();
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
        errorMessage: codeErrorMessage,
        value: code,
        handleBlur: codeBlur,
      } = useField('code', requiredValidation);

      const {
        errorMessage: passwordErrorMessage,
        value: password,
        handleBlur: passwordBlur,
      } = useField('password', requiredValidation);

      const {
        errorMessage: confirmPasswordErrorMessage,
        value: password_confirmation,
        handleBlur: confirmPasswordBlur,
      } = useField('password_confirmation', confirmedValidation);
      
      const resetPassword = handleSubmit(async() => {
        const formData = {
          phone: phone.value,
          phone_code: phone_code.value,
          code: code.value,
          password: password.value,
          password_confirmation: password_confirmation.value,
        };
  
        try {
          const response = axiosInstance.post(props.axiosUrl, formData)
            showSuccessModal.value = true;
            showErrorSpan.value = response.data.status !== 'success';
          } catch (error) {
            showErrorSpan.value = true;
            showErrorSpanMessage.value = error.response.data.message;
          };
    });
      const closeModal = () => {
        showSuccessModal.value = false;
      };
  
      return {
        phone,
        phone_code,
        code,
        password,
        password_confirmation,
        showSuccessModal,
        showErrorSpan,
        resetPassword,
        closeModal,
        showErrorSpan,
        phoneErrorMessage,
        phoneCodeErrorMessage,
        codeErrorMessage,
        passwordErrorMessage,
        confirmPasswordErrorMessage,
        phoneBlur,
        codeBlur,
        passwordBlur,
        confirmPasswordBlur,
        phoneCodeBlur,
      showErrorSpanMessage
      };
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 20px;
  }
  
  .formForget {
    height: 54vh;
  }
  </style>
  