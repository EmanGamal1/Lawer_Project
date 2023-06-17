<template>
    <div>
      <label :for="name">{{ label }}</label>
      <input
        :type="type"
        :class="inputClass"
        v-model="value"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        @blur="handleBlur"
      />
      <error-message :error-message="errorMessage" />
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import ErrorMessage from '@/sharedComponents/ErrorMessage/ErrorMessage.vue';
  
  export default {
    name: 'ValidationField',
    components: {
      ErrorMessage,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: true,
      },
      validationRules: {
        type: Array,
        default: () => [],
      },
    },
    setup(props) {
      const value = ref('');
      const errorMessage = computed(() => {
        for (const rule of props.validationRules) {
          const error = rule(value.value);
          if (error) {
            return error;
          }
        }
        return '';
      });
  
      const handleBlur = () => {
        // Add any additional handling for blur event if needed
      };
  
      return {
        value,
        errorMessage,
        handleBlur,
      };
    },
  };
  </script>
  