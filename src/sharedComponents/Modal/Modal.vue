<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modalStatus">
          <h3>{{ title }}</h3>
          <p>{{ message }}</p>
          <router-link :to="nextLink"><button class="btn allButtons">{{ nextButtonText }}</button></router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      message: String,
      nextButtonText: String,
      nextLink: String,
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
<style scoped>
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
 .close:hover, .close:focus {
   color: black;
   text-decoration: none;
   cursor: pointer;
 }
</style>