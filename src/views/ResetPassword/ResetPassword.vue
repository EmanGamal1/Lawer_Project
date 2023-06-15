<template>
    <login-layout
      title="تغييــر كلمــة المــرور">
    <form class="formForget">
      <label for="phone">رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phone" name="phone" id="phone" placeholder="رقـم الهـاتف" />
        <label for="phone_code">كود رقـم الهــاتف</label>
        <input type="text" class="form-control" v-model="phoneCode" name="phone_code" id="phone_code" placeholder="كود رقـم الهـاتف" />
        <label for="code">الكــود</label>
        <input type="text" class="form-control" v-model="phoneCode" name="code" id="code" placeholder="الكـود" />
        <label for="password">كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="كلمــة المرور" />
        <label for="password">تأكيـد كلمــة المرور</label>
        <input type="password" class="form-control" v-model="password" name="password_confirm" id="password_confirm" placeholder="تأكيـد كلمــة المرور" />
        <input type="submit" class="btn allButtons form-control" value="حفـظ" />
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