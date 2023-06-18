<template>
  <div class="row">
    <div class="col-lg-5 lawyerIMG">
      <img :src="srcIMG" class="information about lawyers" :alt="altIMG" />
    </div>
    <div class="col-lg-4">
      <h1 class="mt-5">
        <span class="coloredSpan">حل قانوني </span><br />
        لحل مشاكلك
      </h1>
      <p class="mt-4">
        المحاماة من الحرف صاحبة التأثير الشديد على صاحبها، خصوصاً في السنوات الأولى من التدريب والممارسة. وخصوصاً في مجالات معينة بداخلها على رأسها القانون الجنائي ومسائل الأحوال الشخصية لما لهما من عنصر نفسي عالي. في السنوات الأولى تكون الحيرة هي أحد العوامل المؤثرة علي شخص المحامي.
      </p>
      <a href="" class="routeSpan underlineSpan m-4">اقـرأ المزيــد</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    srcIMG: {
      type: String,
      required: true,
    },
    altIMG: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.infoIMG {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 20px;
}
@media (max-width: 576px) {
  .infoIMG {
    margin-right: -4%;
  }
}
</style>