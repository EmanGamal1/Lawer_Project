<template>
    <div class="container-fluid homePageContent">
        <OurServices />
        <Statistics />
        <Criminals />
</div>
</template>

<script>
import OurServices from '@/components/OurServices/OurServices.vue'
import Statistics from '@/components/Statistics/Statistics.vue'
import Criminals from '@/components/Criminals/Criminals.vue'

export default {
    components: {
        OurServices,
        Statistics,
        Criminals
    }
}

</script>

<style scoped>
.homePageContent{
    background-color: white;
    border-radius: 50px;
    padding-top: 6%;
}
</style>