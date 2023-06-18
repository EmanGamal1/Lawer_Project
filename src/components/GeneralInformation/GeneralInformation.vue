<template>
    <div class="row">
        <div class="col-lg-12">
            <InforamtionComponentVue class="contentItem mb-5" 
            srcIMG="src/assets/images/lady-justice-with-books-table.jpg"
            altIMG="Information about Lawyer"/>
        </div>
    </div>
    <InforamtionComponentVue class="contentItem my-4 pb-5" 
    srcIMG="src/assets/images/lawyerPhoto.png"
    altIMG="Information about Lawyer"/>
</template>

<script>
import InforamtionComponentVue from "@/sharedComponents/InforamtionComponent/InforamtionComponent.vue";
export default {
    components: {
        InforamtionComponentVue
    }
}
</script>