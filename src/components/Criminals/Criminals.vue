<template>
            <div class="row my-5">
                <h1 class=" mb-4 text-center"><span class="coloredSpan">حل قانوني</span> لحل مشاكلك</h1>
                <div class="col-lg-2">
                    <CriminalCard 
                    iconSrc="src/assets/images/icons/icon1.png"
                    iconAlt="lawyerIcon"
                    title="مجــرم"
                    description="الفوائد خلف الدعم القـانوني"/>
                </div>
                <div class="col-lg-2">
                    <CriminalCard 
                    iconSrc="src/assets/images/icons/icon2.png"
                    iconAlt="lawyerIcon"
                    title="مجــرم"
                    description="الفوائد خلف الدعم القـانوني"/>
                </div>
                <div class="col-lg-2">
                    <CriminalCard 
                    iconSrc="src/assets/images/icons/icon3.png"
                    iconAlt="lawyerIcon"
                    title="مجــرم"
                    description="الفوائد خلف الدعم القـانوني"/>
                </div>
                <div class="col-lg-2">
                    <CriminalCard 
                    iconSrc="src/assets/images/icons/icon3.png"
                    iconAlt="lawyerIcon"
                    title="مجــرم"
                    description="الفوائد خلف الدعم القـانوني"/>
                </div>
                <hr class="mt-5"/>
            </div>
</template>

<script>
import CriminalCard from '@/sharedComponents/CriminalCard/CriminalCard.vue'

export default {
    components: {
        CriminalCard
    }
}
</script>

<style scoped>
@media (max-width: 576px) {
    div{
        margin: auto;
        margin-bottom: 10px;
    }    
}
</style>