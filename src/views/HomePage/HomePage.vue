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
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const token = localStorage.getItem('token')

    if (!token) {
      router.push('/login')
    }
  },
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