<template>
    <h1 class="coloredSpan text-center mb-5">
        <i class='fas fa-user-circle fa-lg'></i>
        حســـابي</h1>
        <div class="profileDetails container">
            <div class="row wrapper">
                <div class="sideBar col-lg-3">
                    <ul class="profileUL">
                        <li class="selected">المعلومــات الشخصيـــة</li>
                        <li class="changePassSpan">تغييـــر كلمة المرور</li>
                        <li class="text-danger">حذف الحســـاب</li>
                        <li class="text-danger">خــروج</li>
                    </ul>
                </div>
                <div class="personalInfo col-lg-8">
                <h3>المعلومــات الشخصيـــة</h3>
                <div class="row">
                    <img src="src/assets/images/lady-justice-with-books-table.jpg" alt="profilePicture" class="profilePicture" />
                </div>
                <div class="row content">
                    <div class="col-lg-6">
                        <h6 class="infoTitle">الاســــم</h6>
                        <p>ااا</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">البريـد الالكترونـــي</h6>
                        <p>ااا</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">رقـم الهـاتف</h6>
                        <p>ااا</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">الدولــة</h6>
                        <p>ااا</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

</template>

<style scoped>
.profileDetails{
    border: 2px solid #EDF6FD;
    border-radius: 15px;
    background-color: white;
    padding: 3%;
}
.wrapper{
    justify-content: space-around;
}
.sideBar{
    border-radius: 15px;
    background-color: #F6FAFC;
}
.personalInfo{
    border-radius: 15px;
    border: 2px solid #EDF6FD;
    padding: 4%;
}
.personalInfo h3{
    font-weight: bold;
    margin-bottom: 4%;
}
.profilePicture{
    border-radius: 50%;
    width: 200px;
    height: auto;
    margin: auto;
}
.infoTitle{
    color: #B1B8C0;
}
.profileUL{
    margin:auto;
    list-style: none;
    text-align: center;
}
.profileUL li{
    margin-top: 10%;
    cursor: pointer;
}
.selected{
    background-color: white;
    border-radius: 5px;
    padding: 10px;
}
.changePassSpan{
    color: #697E95;
}
.content{
    margin-top: 7%;
}
</style>
