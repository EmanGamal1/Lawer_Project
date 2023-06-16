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

export default {
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