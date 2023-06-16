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
                        <li class="text-danger" @click="logout">خــروج</li>
                    </ul>
                </div>
                <div class="personalInfo col-lg-8">
                <h3>المعلومــات الشخصيـــة</h3>
                <div class="row">
                    <img :src="image" alt="profilePicture" class="profilePicture" />
                </div>
                <div class="row content">
                    <div class="col-lg-6">
                        <h6 class="infoTitle">الاســــم</h6>
                        <p>{{ full_name }}</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">البريـد الالكترونـــي</h6>
                        <p>{{ email }}</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">رقـم الهـاتف</h6>
                        <p>{{ phone }}</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">الدولــة</h6>
                        <p>{{ counrty }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MyComponent',
  data() {
    return {
      full_name: '',
      email: '',
      phone: '',
      country: '',
      image: ''
    };
  },
  methods: {
    async logout() {
      try {
        await axios.post('http://lawyer.phpv8.aait-d.com/api/client_web/logout', {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        localStorage.removeItem('token');
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
    async fetchData() {
      try {
        const response = await axios.get('http://lawyer.phpv8.aait-d.com/api/client_web/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = response.data.data;
        this.full_name = data.full_name;
        this.email = data.email;
        this.phone = data.phone;
        this.country = data.country.name;
        this.image = data.image;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

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
    width: 150px;
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
