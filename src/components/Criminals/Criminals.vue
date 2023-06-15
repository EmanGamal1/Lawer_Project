<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-6">
                <h1><span class="coloredSpan">حل قانوني</span> لحل مشاكلك</h1>
            </div>
        </div>
        <div class="row">
            <CriminalCard />
        </div>
    </div>
</template>

<script>
import CriminalCard from '@/sharedComponents/CriminalCard/CriminalCard.vue'

export default {
    component: {
        CriminalCard
    }    
}
</script>