<template>
    <login-layout title="تغييــر كلمــة المــرور">
      <form class="formForget" @submit.prevent="resetPassword">
        <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone_code" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <label for="code">الكــود</label>
        <input type="text" class="form-control" v-model="code" name="code" id="code" placeholder="الكـود" />
        <label for="password">كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
        <label for="password_confirmation">تأكيـد كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password_confirmation" name="password_confirmation" id="password_confirmation" placeholder="تأكيـد كلمــة المرور" />
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
  import { axiosInstance } from '@/Axios.js';
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  import Modal from '@/sharedComponents/Modal/Modal.vue';
  
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
        default: '/login', // Default next link
      },
    },
    data() {
      return {
        phone: '',
        phone_code: '',
        code: '',
        password: '',
        password_confirmation: '',
        showSuccessModal: false,
      };
    },
    methods: {
      resetPassword() {
        const formData = {
          phone: this.phone,
          phone_code: this.phone_code,
          code: this.code,
          password: this.password,
          password_confirmation: this.password_confirmation,
        };
  
        axiosInstance
          .post(this.axiosUrl, formData)
          .then(response => {
            console.log(response.data);
            this.showSuccessModal = true;
          })
          .catch(error => {
            console.error(error);
          });
      },
      closeModal() {
        this.showSuccessModal = false;
      },
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
  