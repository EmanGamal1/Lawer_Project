<template>
    <span class="errors" v-if="errorMessage">{{ errorMessage }}<br /></span>
  </template>
  
  <script>
  export default {
    name: 'ErrorMessage',
    props: {
      errorMessage: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  