<template>
    <login-layout
      title="نسيــت كلمــة المــرور">
    <form class="formForget">
        <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phoneCode" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <input type="submit" class="btn allButtons form-control" value="إرســال" />
    </form>
    </login-layout>
</template>

<style scoped>
input {
    margin-bottom: 20px;
}
.formForget{
    height: 54vh;
}
</style>

<script>
  import LoginLayout from '@/views/LoginLayout/LoginLayout.vue';
  export default {
    name: 'ForgetPassword',
    components: {
      LoginLayout,
    }
}
</script>