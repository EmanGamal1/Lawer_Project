<template>
    <CodeConfirmation :url="'/api/client_web/check_code'" redirect-route="/reset-password" />
  </template>
  
  <script>
  import CodeConfirmation from '@/sharedComponents/CodeConfirmation/CodeConfirmation.vue';
  export default {
    components: {
      CodeConfirmation
    }
  }
  </script>