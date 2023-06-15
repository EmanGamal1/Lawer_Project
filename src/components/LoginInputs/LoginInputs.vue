<template>
    <form @submit.prevent="login">
        <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phoneCode" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <label for="password">كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
        <p>نسيــت كلمـة المــرور؟</p>
        <input type="submit" class="btn allButtons form-control" value="دخــول" />
    </form>
</template>

<style scoped>
input {
    margin-bottom: 20px;
}
</style>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            phone: '',
            phoneCode: '',
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://lawyer.phpv8.aait-d.com/api/client_web/login', {
                    phone: this.phone,
                    phone_code: this.phoneCode,
                    password: this.password
                });

                // Handle the response as needed
                if (response.status === 200) {
                    // Set the token in local storage
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                } else {
                    // Login failed, handle error
                }
            } catch (error) {
                // Handle any network or other errors
            }
        }
    }
};
</script>
