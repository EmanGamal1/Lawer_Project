<template>
    <div class="userProfile">
        <NavBarSite />
        <UserProfileDetails />
        <FooterComponent />
    </div>
</template>

<script>
import NavBarSite from '@/components/NavBarSite/NavBarSite.vue'
import UserProfileDetails from '@/components/UserProfileDetails/UserProfileDetails.vue'
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
        FooterComponent,
        UserProfileDetails
    }
}
</script>

<style scoped>
.userProfile{
    background-color: #181E3C;
    height: 350px;
}
</style>