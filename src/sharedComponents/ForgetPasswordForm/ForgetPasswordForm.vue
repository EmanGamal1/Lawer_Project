<template>
  <login-layout title="نسيــت كلمــة المــرور">
    <form class="formForget" @submit="sendCode">
      <label for="phone">رقـم الهــاتف</label>
      <input
        type="text"
        class="form-control"
        v-model="phone"
        name="phone"
        id="phone"
        placeholder="رقـم الهـاتف"
      />
      <span class="errors">{{ phoneErrorMessage }}<br /></span>
      <label for="phone_code">كود البلـــد</label>
      <input
        type="text"
        class="form-control"
        v-model="phoneCode"
        name="phone_code"
        id="phone_code"
        placeholder="كود البلـــد"
      />
      <span class="errors">{{ phoneCodeErrorMessage }}<br /></span>
      <span v-if="showErrorSpan" class="invalidData errors mb-3">{{
        showErrorSpanMessage
      }}</span>
      <input
        type="submit"
        class="btn allButtons form-control"
        value="إرســال"
      />
    </form>

    <Modal
      v-if="showSuccessModal"
      :title="'تمـــت'"
      message="تم الارســال بنجاح"
      :next-button-text="'التـــالي'"
      :next-link="nextLink"
      @close-modal="closeModal"
    />
  </login-layout>
</template>
  
<script>
import { axiosInstance } from "@/Axios";
import LoginLayout from "@/views/LoginLayout/LoginLayout.vue";
import Modal from "@/sharedComponents/Modal/Modal.vue";
import { useField, useForm } from "vee-validate";
import { requiredValidation, phoneValidation } from "@/validationRules";
import { ref } from "vue";

export default {
  name: "ForgetPassword",
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
      default: "/check-code",
    },
  },
  setup(props) {
    const showErrorSpanMessage = ref("");
    const showSuccessModal = ref(false);
    const showErrorSpan = ref(false);

    const { handleSubmit } = useForm();
    const {
      errorMessage: phoneErrorMessage,
      value: phone,
      handleBlur: phoneBlur,
    } = useField("phone", phoneValidation);

    const {
      errorMessage: phoneCodeErrorMessage,
      value: phoneCode,
      handleBlur: phoneCodeBlur,
    } = useField("phone_code", requiredValidation);

    const sendCode = handleSubmit(async () => {
      const data = {
        phone: phone.value,
        phone_code: phoneCode.value,
      };

      try {
        const response = await axiosInstance.post(props.axiosUrl, data);
        showSuccessModal.value = true;
        showErrorSpan.value = response.data.status !== "success";
      } catch (error) {
        console.error(error);
        showErrorSpan.value = true;
        showErrorSpanMessage.value = error.response.data.message;
      }
    });

    const closeModal = () => {
      showSuccessModal.value = false;
    };

    return {
      phone, phoneCode,
      phoneBlur, phoneCodeBlur,
      showSuccessModal,
      showErrorSpan,
      showErrorSpanMessage,
      phoneErrorMessage,
      phoneCodeErrorMessage,
      sendCode,
      closeModal,
    };
  },
};
</script>
  
<style scoped>
.formForget {
  height: 54vh;
}
</style>
