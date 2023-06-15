<template>
  <div v-if="!showAnotherComponent">
        <p class="text-secondary">اختــر</p>
            <div class="row mb-5 loggedPersonContainer">
              <div class="col-6 loggedPerson" @click="selectPerson(0)" :class="{ 'selected': selectedPerson === 0 }">
                <img src="./../../assets/images/icons/logo.png" alt="client" />
                <p>عميـل</p>
              </div>
              <div class="col-6 loggedPerson" @click="selectPerson(1)" :class="{ 'selected': selectedPerson === 1 }">
                <img src="./../../assets/images/icons/lawyerIcon.png" alt="lawyer" />
                <p>محـامي</p>
              </div>
            </div>
            <div class="row mb-3">
              <button class="btn allButtons" :disabled="disableButton" @click="handleButtonClick">
                التــالي
              </button>
              <p class="text-center">ليس لديك حســاب؟ 
                <router-link to="/signup" class="routeSpan">إنشــاء حســاب جديد</router-link>
               </p>
          </div>
        </div>
          <div v-if="showAnotherComponent">
              <LoginInputs />
          </div>
</template>

<script>
import { computed, ref } from 'vue';
import LoginInputs from '@/components/LoginInputs/LoginInputs.vue';

export default {
  components: {
    LoginInputs
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
  border-color: #C8A45D;
}
.loggedPersonContainer{
    justify-content: space-around;
}
</style>