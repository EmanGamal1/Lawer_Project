<template>
  <login-layout title="تسجيل حساب جديد" description="أهلا بك في موقعنا">
    <form @submit.prevent="submitForm">
      <label for="full_name">الاسم</label>
      <input
        type="text"
        v-model="full_name"
        class="form-control"
        id="full_name"
        placeholder="اسم المستخدم"
      />
      <span class="errors">{{ full_nameErrorMessage }}<br /></span>

      <label for="email">البريد الإلكتروني</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="email"
        placeholder="البريد الإلكتروني"
      />
      <span class="errors">{{ emailErrorMessage }}<br /></span>

      <label for="phone">رقم الهاتف</label>
      <input
        type="text"
        v-model="phone"
        class="form-control"
        id="phone"
        placeholder="رقم الهاتف"
      />
      <span class="errors">{{ phoneErrorMessage }}<br /></span>

      <label for="phone_code">كود البلــد</label>
      <input
        type="text"
        v-model="phone_code"
        class="form-control"
        id="phone_code"
        placeholder="كود البلـــد"
      />
      <span class="errors">{{ phoneCodeErrorMessage }}<br /></span>

      <div class="password-input">
        <label for="password">كلمة المرور</label>
        <input
          :type="passwordFieldType"
          v-model="password"
          class="form-control"
          id="password"
          placeholder="كلمة المرور"
        />
        <font-awesome-icon
          class="password-toggle"
          icon="eye"
          @click="togglePasswordVisibility"
        />
      </div>
      <span class="errors">{{ passwordErrorMessage }}<br /></span>

      <div class="password-input">
        <label for="password_confirmation">تأكيد كلمة المرور</label>
        <input
          :type="passwordConfirmFieldType"
          v-model="password_confirmation"
          class="form-control"
          id="password_confirmation"
          placeholder="تأكيد كلمة المرور"
        />
        <font-awesome-icon
          class="password-toggle"
          icon="eye"
          @click="toggleConfirmPasswordVisibility"
        />
        <span class="errors">{{ confirmPasswordErrorMessage }}<br /></span>
      </div>

      <span v-if="showErrorSpan" class="invalidData errors"
        >{{ errorResponse }}<br
      /></span>

      <input
        type="submit"
        class="form-control btn allButtons"
        value="إنشاء حساب جديد"
      />

      <p class="text-center">
        تمتلك حسابًا بالفعل؟
        <router-link to="/login" class="routeSpan">تسجيل الدخول</router-link>
      </p>
    </form>
  </login-layout>
</template>

<script>
import LoginLayout from "@/views/LoginLayout/LoginLayout.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { axiosInstance } from "@/Axios.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import {
  requiredValidation,
  phoneValidation,
  confirmedValidation,
} from "@/validationRules";

export default {
  name: "LoginView",
  components: {
    LoginLayout,
    FontAwesomeIcon,
  },
  setup() {
    const showErrorSpan = ref(false);
    const router = useRouter();

    const { handleSubmit, errors, isSubmitting } = useForm();

    const {
      value: full_name,
      errorMessage: full_nameErrorMessage,
      handleBlur: full_nameBlur,
    } = useField("full_name", requiredValidation);

    const {
      value: email,
      errorMessage: emailErrorMessage,
      handleBlur: emailBlur,
    } = useField("email", requiredValidation);

    const {
      value: phone,
      errorMessage: phoneErrorMessage,
      handleBlur: phoneBlur,
    } = useField("phone", phoneValidation);

    const {
      value: phone_code,
      errorMessage: phoneCodeErrorMessage,
      handleBlur: phoneCodeBlur,
    } = useField("phone_code", requiredValidation);

    const {
      value: password,
      errorMessage: passwordErrorMessage,
      handleBlur: passwordBlur,
    } = useField("password", requiredValidation);

    const {
      value: password_confirmation,
      errorMessage: confirmPasswordErrorMessage,
      handleBlur: confirmPasswordBlur,
    } = useField("password_confirmation", confirmedValidation);

    const passwordFieldType = ref("password");
    const passwordConfirmFieldType = ref("password");

    const togglePasswordVisibility = () => {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
    };

    const toggleConfirmPasswordVisibility = () => {
      passwordConfirmFieldType.value =
        passwordConfirmFieldType.value === "password" ? "text" : "password";
    };

    const errorResponse = ref("");

    const submitForm = handleSubmit(async () => {
      try {
        const payload = {
          full_name: full_name.value,
          email: email.value,
          phone: phone.value,
          phone_code: phone_code.value,
          password: password.value,
          password_confirmation: password_confirmation.value,
        };

        const response = await axiosInstance.post(
          "/api/client_web/register",
          payload
        );
        router.push("/verfication");
        console.log("Error: " + response.data.message);
      } catch (error) {
        console.error(error);
        showErrorSpan.value = true;
        errorResponse.value = error.response.data.message;
      }
    });

    return {
      full_name, full_nameErrorMessage, full_nameBlur,
      email, emailErrorMessage, emailBlur,
      phone, phoneErrorMessage, phoneBlur,
      phone_code, phoneCodeErrorMessage, phoneCodeBlur,
      password, passwordErrorMessage, passwordBlur,
      password_confirmation,
      confirmPasswordErrorMessage,
      confirmPasswordBlur,
      passwordFieldType,
      passwordConfirmFieldType,
      togglePasswordVisibility,
      toggleConfirmPasswordVisibility,
      submitForm,
      showErrorSpan, isSubmitting,
      errors, errorResponse,
    };
  },
};
</script>

<style>
.list-item {
  list-style: none;
  display: inline-block;
}
.loginContent {
  padding: 16%;
}
.loggedPerson {
  border: 2px solid #edf6fd;
  border-radius: 10px;
  text-align: center;
  width: 170px;
  height: 120px;
  padding: 10px;
}
.loggedPerson.selected {
  border-color: orange;
}
.loggedPersonContainer {
  justify-content: space-around;
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
