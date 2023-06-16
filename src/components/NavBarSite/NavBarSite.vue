<template>
    <div class="container">
        <nav class="navbar d-flex">
        <router-link to="/"><img src="./../../assets/images/icons/logoSite.png" alt="client" /></router-link>
        <div class="d-flex">
            <ul class="navbarLi">
                <router-link to="/login" class="routeSpan"><li>دخــول</li></router-link>
                <router-link to="/signup" class="routeSpan"><li>تسجيـل حساب</li></router-link>
            </ul>
        </div>
        </nav>
        <hr />
    </div>
</template>

<style>
.navbar{
    justify-content: space-between;
}
.navbarLi{
    list-style: none;
    display: flex;
}
.navbar li{
    margin-right: 20px;
}
</style>