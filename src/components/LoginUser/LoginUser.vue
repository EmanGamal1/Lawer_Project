<template>
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
              <button class="btn btn-secondary" :disabled="disableButton">التــالي</button>
            </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const selectedPerson = ref(null);

    const selectPerson = (index) => {
      selectedPerson.value = index;
    };

    const disableButton = computed(() => {
      return selectedPerson.value === null;
    });

    return {
      selectedPerson,
      selectPerson,
      disableButton,
    };
  },
};
</script>
