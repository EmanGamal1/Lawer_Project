<template>
    <login-layout title="نسيــت كلمــة المــرور">
      <form class="formForget" @submit="sendCode">
        <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phoneCode" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <input type="submit" class="btn allButtons form-control" value="إرســال" />
      </form>
  
      <Modal 
      v-if="showSuccessModal"
        :title="'تمـــت'"
        message="تم الارســال بنجاح"
        :next-button-text="'التـــالي'"
        :next-link="nextLink"
        @close-modal="closeModal"/>
    </login-layout>
  </template>
  
  <style scoped>
  input {
    margin-bottom: 20px;
  }
  
  .formForget {
    height: 54vh;
  }
  </style>
  
  <script>
  import { axiosInstance } from '@/Axios';
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  import Modal from '@/sharedComponents/Modal/Modal.vue';
  
  export default {
    name: 'ForgetPassword',
    components: {
      LoginLayout,
      Modal
    },
    data() {
      return {
        phone: '',
        phoneCode: '',
        showSuccessModal: false,
      };
    },
    props: {
  axiosUrl: {
    type: String,
    required: true,
  },
  nextLink: {
    type: String,
    default: '/check-code',
  },
},
    methods: {
        sendCode(event) {
  event.preventDefault();

  const data = {
    phone: this.phone,
    phone_code: this.phoneCode,
  };

  axiosInstance
    .post(this.axiosUrl, data)
    .then(response => {
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
  