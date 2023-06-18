<template>
    <div class='wrapper container-fluid pb-3 mb-5'>
        <div class='row'>
        <div class='col-lg-4 installApp '>
            <h1 class='mb-5'><span class='coloredSpan'>تحميــل</span><br/>
                 تطبيــق الهــاتف</h1>
                 <p class='mt-4'>
                    تحميــل على
                 </p>
                 <div class='d-flex'>
                        <a href="https://play.google.com/store/games"><img src="src/assets/images/GooglePlay.png" alt='googlePlay' class='googlePlay' /></a>
                        <a href="https://www.apple.com/store"><img src="src/assets/images/AppStore.png" alt='appStore' class='appStore' /></a>
                 </div>
                </div>
        <div class='col-lg-5'>
            <img src="src/assets/images/phones.png" alt='mobileApplication' class='mobileApplication'/>
        </div>
        
    </div>
    </div>
</template>

<style scoped>
.wrapper {
    background-image: url("src/assets/images/backgroundIMGforDiv.png");
    border-radius: 30px;
    color: white;
    width: 97%;
}
.googlePlay, .appStore{
    width: 200px;
    height: auto;
}
.installApp{
    margin: auto;
    margin-right: 10%;
}

@media (max-width: 576px) {
    .mobileApplication{
        width: 95%;
    }
    .installApp{
        margin-top: 20px;
    }
}
</style>