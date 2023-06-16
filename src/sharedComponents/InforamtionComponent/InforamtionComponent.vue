<template>
    <div class="row">
        <div class="col-lg-5 lawyerIMG">
            <img :src="srcIMG" class="infoIMG" :alt="altIMG" />
            <!-- <div class="boxAboveIMG">
                    {{ boxContent }}
                </div> -->
            </div>
        <div class="col-lg-4">
            <h1 class="mt-5"><span class="coloredSpan">حل قانوني </span><br/>
                 لحل مشاكلك</h1>
                 <p class="mt-4">
                    لحل قانوني للمشاكلك للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة للصفحة الصحيحة
                 </p>
                 <a href="" class="routeSpan underlineSpan m-4">اقـرأ المزيــد</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            srcIMG:{
                type: String,
                required: true
            },
            altIMG:{
                type: String,
                required: true
            },
            // boxContent:{
            //     type: String,
            //     required: true
            // }
        }
    }
</script>

<style scoped>
.infoIMG{
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 20px;
}
/* .boxAboveIMG{
    box-sizing: border-box;

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15.419px 18.5028px;
gap: 6.17px;

position: absolute;
width: 276px;
height: 173.08px;
left: 700px;
top: 2100px;


background: #FFFFFF;

border: 0.77095px solid #E3F0FA;
border-radius: 9.2514px;
} */
</style>