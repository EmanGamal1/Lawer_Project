<script>
import LoginUser from '@/components/LoginUser/LoginUser.vue'

export default {
    name: "LoginView",
    components:{
        LoginUser
    }
}
</script>

<template>
  <main>
    <div class="row">
        <div class="col-6">
            <nav>
              <div class="row">
                <div class="col-6">
                    <img src="./../../assets/images/icons/logo.png" alt="client" />
                </div>
                <div class="col-6 align-left">
                  <div class="row">
                    <div class="col-1">
                      <img src="./../../assets/images/icons/langIcon.png" alt="client" />
                    </div>
                    <div class="col-1">
                      <p>Ar</p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div class="container-fluid loginContent">
          <h4>مرحبــًا,</h4>
          <h1>أهلا مجــددًا.</h1>
          <div class="container mt-5">
                <LoginUser />
            <p class="text-center">ليس لديك حســاب؟ <span class="createAcountSpan"> 
                <router-link to="/signup">إنشــاء حســاب جديد</router-link>
                </span></p>
            <Login />
          </div>
            </div>
        </div>
        <div class="col-6 loginAvatar">
            <!-- <p>right</p> -->
        </div>
    </div>
  </main>
</template>

<style>
.loginAvatar{
    background-image: url("./../../assets/images/loginAvatar.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.createAcountSpan{
    color: orange;
}
.list-item{
    list-style: none;
    display: inline-block;
}
.loginContent{
    padding: 16%;
}
.loggedPerson{
    border: 2px solid #EDF6FD;
    border-radius: 10px;
    text-align: center;
    width: 170px;
    height: 120px;
    padding: 10px;
}
.loggedPerson.selected {
  border-color: orange;
}
.loggedPersonContainer{
    justify-content: space-around;
}
</style>