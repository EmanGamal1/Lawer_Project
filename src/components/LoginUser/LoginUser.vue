<template>
  <div v-if="!showAnotherComponent">
    <p class="text-secondary">اختــر</p>
    <div class="row mb-5 loggedPersonContainer">
      <div class="col-6 loggedPerson" @click="selectPerson(0)" :class="{ 'selected': selectedPerson === 0 }">
        <img src="src/assets/images/icons/logo.png" alt="client in Lawyer site" />
        <p>عميـل</p>
      </div>
      <div class="col-6 loggedPerson" @click="selectPerson(1)" :class="{ 'selected': selectedPerson === 1 }">
        <img src="src/assets/images/icons/lawyerIcon.png" alt="lawyer in Lawyer site" />
        <p>محـامي</p>
      </div>
    </div>
    <div class="row mb-3">
      <button class="btn allButtons mb-3" :disabled="disableButton" @click="handleButtonClick">
        التــالي
      </button>
      <p class="text-center">ليس لديك حســاب؟ 
        <router-link to="/signup" class="routeSpan">إنشــاء حســاب جديد</router-link>
      </p>
    </div>
  </div>
  <div v-if="showAnotherComponent">
    <template v-if="selectedPerson === 0">
      <LoginInputsClient />
    </template>
    <template v-else-if="selectedPerson === 1">
      <LoginInputsLawyer />
    </template>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import LoginInputsClient from '@/components/LoginInputs/LoginInputsClient.vue';
import LoginInputsLawyer from '@/components/LoginInputs/LoginInputsLawyer.vue';

export default {
  components: {
    LoginInputsClient,
    LoginInputsLawyer
  },
  setup() {
    const selectedPerson = ref(null);

    const selectPerson = (index) => {
      selectedPerson.value = index;
    };

    const disableButton = computed(() => {
      return selectedPerson.value === null;
    });

    const showAnotherComponent = ref(false);

    const handleButtonClick = () => {
      if (!disableButton.value) {
        showAnotherComponent.value = true;
      }
    };

    return {
      selectedPerson,
      selectPerson,
      disableButton,
      showAnotherComponent,
      handleButtonClick
    };
  },
};
</script>

<style scoped>
.loginContent {
  padding: 16%;
}
.loggedPerson {
  border: 2px solid #EDF6FD;
  border-radius: 10px;
  text-align: center;
  width: 170px;
  height: 120px;
  padding: 10px;
  margin-bottom: 10px;
}
.loggedPerson.selected {
  border-color: #C8A45D;
}
.loggedPerson:hover {
  cursor: pointer;
}
.loggedPersonContainer {
  justify-content: space-around;
}
</style>
