<template>
  <login-layout title="نسيــت كلمــة المــرور">
    <form class="formForget" @submit="sendCode">
      <label for="phone">رقـم الهــاتف</label>
      <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
      <label for="phone_code">كود رقـم الهــاتف</label>
      <input type="text" class="form-control" v-model="phoneCode" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
      <input type="submit" class="btn allButtons form-control" value="إرســال" />
    </form>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modalStatus">
          <h3>تمـــت</h3>
          <p>تم الارســال بنجاح</p>
        </div>
      </div>
    </div>
  </login-layout>
</template>

<style scoped>
input {
  margin-bottom: 20px;
}

.formForget {
  height: 54vh;
}

/* Modal Styles */
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 300px;
  max-height: 250px;
}
.modalStatus{
  text-align: center;
  margin-top: 20px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script>
import { axiosInstance } from '@/Axios';
import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';

export default {
  name: 'ForgetPassword',
  components: {
    LoginLayout,
  },
  data() {
    return {
      phone: '',
      phoneCode: '',
      showSuccessModal: false, // Track modal visibility
    };
  },
  methods: {
    sendCode(event) {
      event.preventDefault();

      // Prepare the data to be sent in the request body
      const data = {
        phone: this.phone,
        phone_code: this.phoneCode,
      };

      // Make the API request
      axiosInstance
        .post('/api/client_web/send_code', data)
        .then(response => {
          // Handle the response here
          console.log('Doneeeeeeeeeeeeeeeeeeeeeee' + response.data); // Modify this to perform the desired actions
          this.showSuccessModal = true; // Show success modal
        })
        .catch(error => {
          // Handle any errors that occur during the request
          console.error(error);
        });
    },
    closeModal() {
      this.showSuccessModal = false; // Hide success modal
    },
  },
};
</script>
