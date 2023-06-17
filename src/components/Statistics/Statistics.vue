<template>
        <div class="container-fluid circularDiv">
        <div class="circularBorder border-dashed rounded-circle">
            <h2>+500</h2>
            <p>عمـلاء سعـداء</p>
        </div>
        <div class="circularBorder border-dashed rounded-circle">
            <h2>+500</h2>
            <p>عمـلاء سعـداء</p>
        </div>
        <div class="circularBorder border-dashed rounded-circle">
            <h2>+500</h2>
            <p>عمـلاء سعـداء</p>
        </div>
        <div class="circularBorder border-dashed rounded-circle">
            <h2>+500</h2>
            <p>عمـلاء سعـداء</p>
        </div>
    </div>
</template>

<style scoped>
.circularBorder{
    border: 2px dashed #C8A45D;
    text-align: center;
    width: 200px;
    height: 200px;
    margin-right: 15px;
    padding: 50px;
}
.circularDiv{
    display: flex;
    justify-content: center;
    padding-top: 6%;
    padding-bottom: 6%;
}

@media (max-width: 576px) {
  .circularBorder {
    width: 60%;
    margin-bottom: 15px;
  }
  .circularDiv{
    display: block;
    margin-right: 15%;
  }
}
  @media (max-width: 992px) {
  .circularBorder {
    margin-bottom: 15px;
  }
  .circularDiv{
    display: block;
    margin-right: 15%;
  }
}
</style>