<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div dir="rtl">
<!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav>
    </div>
  </header>
-->
  <RouterView /> 
</div>
</template>

<style scoped>

@media (min-width: 1024px) {
}
</style>
