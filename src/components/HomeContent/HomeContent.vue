<template>
    <div class="container-fluid homePageContent">
        <div class="content ">
            <OurServices class="contentItem" />
            <Statistics class="contentItem" />
            <Criminals class="contentItem" />
            <GeneralInformation />
        </div>
    </div>
</template>

<script>
import OurServices from '@/components/OurServices/OurServices.vue'
import Statistics from '@/components/Statistics/Statistics.vue'
import Criminals from '@/components/Criminals/Criminals.vue'
import GeneralInformation from '@/components/GeneralInformation/GeneralInformation.vue'

export default {
    components: {
        OurServices,
        Statistics,
        Criminals,
        GeneralInformation
    }
}

</script>

<style scoped>
.homePageContent{
    background-color: white;
    border-radius: 50px;
    padding-top: 6%;
    margin-top: -30px;
}
.content{
    width: 80%;
    margin: auto;
}

</style>