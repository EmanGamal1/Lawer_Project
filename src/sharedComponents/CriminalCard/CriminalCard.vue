<template>
    <div class="criminalCard">
        <img :src="iconSrc" :alt="iconAlt" class="mb-5"/>
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            iconSrc: {
                type: String,
                required: true
            },
            iconAlt: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.criminalCard{
    border-radius: 10px;
    padding: 20px;
    background-color: #F5FBFF;
    width: 200px;
    height: auto;
}
</style>