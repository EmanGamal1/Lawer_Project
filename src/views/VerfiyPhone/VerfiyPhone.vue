<template>
  <CodeConfirmation :url="'/api/client_web/verify_Phone'" redirect-route="/login" />
</template>

<script>
import CodeConfirmation from '@/sharedComponents/CodeConfirmation/CodeConfirmation.vue';
export default {
  components: {
    CodeConfirmation
  }
}
</script>