<script setup lang="ts">
</script>

<template>
  <main>
    <div class="backgroundIMG">
      <NavBarSite />
      <HeaderComponent />
    </div>
    <HomeContent />
    <Ads />
    <AboutUs />
    <FooterComponent />
  </main>
</template>

<script>
import NavBarSite from '@/components/NavBarSite/NavBarSite.vue'
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent.vue'
import HomeContent from '@/components/HomeContent/HomeContent.vue'
import Ads from '@/components/Ads/Ads.vue'
import AboutUs from '@/components/AboutUs/AboutUs.vue'
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue'

export default {
  components: {
    NavBarSite,
    HeaderComponent,
    HomeContent,
    Ads,
    AboutUs,
    FooterComponent
  }
}
</script>

<style>
.backgroundIMG{
  background-image: url("@/assets/images/backgroundimage.png");
  background-repeat: no-repeat;
  background-size: cover;
}
main{
  background-color: #181E3C;
}
</style>