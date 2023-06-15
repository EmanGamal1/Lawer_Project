<template>
    <div class="row">
          <div class="col-6">
              <NavBarAuth />
              <div class="container-fluid loginContent">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="container">
                  <slot></slot>
              </div>
              </div>
          </div>
          <div class="col-6 loginAvatar"></div>
      </div>
    </template>

  <script>
  import NavBarAuth from '@/components/NavBarAuth/NavBarAuth.vue';
export default {
  name: 'LoginLayout',
  components: {
    NavBarAuth
  },
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    content: {
        type: String,
        required: true
    }
  }
}
</script>

<style>
.loginAvatar{
    background-image: url("./../../assets/images/loginAvatar.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.list-item{
    list-style: none;
    display: inline-block;
}
.loginContent{
    padding: 16%;
}
</style>