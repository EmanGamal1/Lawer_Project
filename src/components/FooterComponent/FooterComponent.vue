<template>
    <footer class="footer container-fluid">
        <div class="container">
        <div class="row ">
            <div class="col-lg-2">
                <img src="src/assets/images/icons/logoSite.png" alt="Logo Footer for Lawyer" />
            </div>
            <div class="col-lg-3">
                <ul>
                    <li>الصفحــة الرئيسيــة</li>
                    <li>عنَـــا</li>
                    <li>الخدمـــات</li>
                    <li>االمدونــات</li>
                </ul>
            </div>
            <div class="col-lg-3">
                <ul>
                    <li>
                        <span class="footerLi">رقـم الهاتــف</span>
                        <p>01234567891</p>
                    </li>
                    <li>
                        <span class="footerLi">البريـد الالكتــروني</span>
                        <p>LawyerSite@gmail.com</p>
                    </li>
                    <li>
                        <span class="footerLi">العنـــوان</span>
                        <p>المنصــورة، مصـــر</p>
                    </li>
                    <li>
                        <span class="footerLi">سـاعـات العمــل</span>
                        <p>الأيـــام: الأحــد - الخميــس</p>
                        <p>الوقـــت: 9:00 صباحــًا - 5:00 مســـاءًا</p>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4">
                <p>تحميــل التطبيــق</p>
                <div class="row">
                    <div class="col-lg-6">
                        <img src="src/assets/images/GooglePlay.png" alt="GooglePlay" class="Google Play Application Lawyer" />
                    </div>
                    <div class="col-lg-6">
                        <img src="src/assets/images/AppStore.png" alt="AppStore" class="App Store Application Lawyer" />
                    </div>
                </div>
            </div>

        </div>
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-6">
                <font-awesome-icon :icon="['fab', 'facebook']" size="2x" class="socailMediaIcon ms-2" />
                <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="socailMediaIcon ms-2"/>
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="socailMediaIcon ms-2"/>
            </div>
            <div class="col-lg-3">
                <div class="row">
                    <div class="col-lg-6">
                        <p class="footerLi">تواصــل معنــا</p>
                    </div>
                    <div class="col-lg-6">
                        <p class="footerLi">شــروط الاستخـــدام</p>
                    </div>
                </div>
            </div>
        <hr />
            <p class="copyRights footerLi">
                2023 &copy;محــاماة، تم تصميمه من قبل العالميـــة
            </p>
        </div>
    </div>
    </footer>
</template>

<style scoped>
.footer{
    color: white !important;
    font-size: 14px;
    padding-top: 5%;
    background-color: #181E3C;
}
li{
    list-style: none;
    margin-bottom: 20px;
}
.footerLi{
    color: #697E95;
    font-size: 14px;
}
.googlePlay, .appStore{
    width: 150px;
    height: auto;
}
.socailMediaIcon {
    color: #697E95;
}
.copyRights{
    text-align: center;
}
</style>