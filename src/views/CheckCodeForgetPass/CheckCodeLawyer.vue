<template>
    <CodeConfirmation :url="'/api/lawyer_web/check_code'" redirect-route="/lawyer-reset-password" />
  </template>
  
  <script>
  import CodeConfirmation from '@/sharedComponents/CodeConfirmation/CodeConfirmation.vue';
  export default {
    components: {
      CodeConfirmation
    }
  }
  </script>