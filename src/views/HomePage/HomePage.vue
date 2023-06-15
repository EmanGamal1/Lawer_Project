<script setup lang="ts">
</script>

<template>
  <main>
    <NavBarSite />
    <HeaderComponent />
    <HomeContent />
  </main>
</template>

<script>
import NavBarSite from '@/components/NavBarSite/NavBarSite.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import HomeContent from '@/components/HomeContent/HomeContent.vue'

export default {
  components: {
    NavBarSite,
    HeaderComponent,
    HomeContent
  }
}
</script>

<style>
main{
  background-image: url("@/assets/images/backgroundimage.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>