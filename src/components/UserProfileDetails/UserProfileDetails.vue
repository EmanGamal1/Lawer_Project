<template>
    <h1 class="coloredSpan text-center mb-5">
        <i class='fas fa-user-circle fa-lg'></i>
        حســـابي</h1>
        <div class="profileDetails container">
            <div class="row wrapper">
                <div class="sideBar pb-5 col-lg-3">
                    <ul class="profileUL">
                        <li class="selected">المعلومــات الشخصيـــة</li>
                        <li class="text-danger" @click="logout">خــروج</li>
                    </ul>
                </div>
                <div class="personalInfo col-lg-8">
                <h3>المعلومــات الشخصيـــة</h3>
                <div class="row">
                    <img :src="image" alt="profile Picture in Lawyer" class="profilePicture" />
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
                        <p>{{ phone_complete_form }}</p>
                    </div>
                    <div class="col-lg-6">
                        <h6 class="infoTitle">المستخـدم</h6>
                        <p>{{ user_type }}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
</template>

<script>
import { axiosInstance } from '@/Axios';
import jwtDecode from 'jwt-decode';

export default {
  name: 'MyComponent',
  data() {
    return {
      full_name: '',
      email: '',
      phone_complete_form: '',
      image: '',
      user_type: '',
    };
  },
  methods: {
    async logout() {
      try {
        const token= localStorage.getItem('token');
        const decodedTokenIss = jwtDecode(token).iss;
        
        let logoutUrl = '';
        if (decodedTokenIss.includes('/api/client_web/login')) {
          logoutUrl = '/api/client_web/logout';
        } else if (decodedTokenIss.includes('/api/lawyer_web/login')) {
          logoutUrl = '/lawyer/logout';
        }
        await axiosInstance.post(logoutUrl);
        localStorage.removeItem('token');
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
    async fetchData() {
      try {
        const token= localStorage.getItem('token');
        const decodedTokenIss = jwtDecode(token).iss;
        let profileUrl = '';
        if (decodedTokenIss.includes('/api/client_web/login')) {
          profileUrl = '/api/client_web/profile';
        } else if (decodedTokenIss.includes('/api/lawyer_web/login')) {
          profileUrl = '/lawyer/profile';
        }
        const response = await axiosInstance.get(profileUrl);
        const data = response.data.data;
        this.full_name = data.full_name;
        this.email = data.email;
        this.phone_complete_form = data.phone_complete_form;
        this.image = data.image;
        this.user_type = data.user_type;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
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
.content{
    margin-top: 7%;
}
</style>
