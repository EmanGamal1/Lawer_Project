<template>
    <div class="card">
            <img :src="cardSrc" alt="aboutusCard"/>
        <div class="card-body">
            <p class="dataOfCrime">
                {{ dataOfCrime }}
            </p>
            <h4>
                {{  cardTitle }}
            </h4>
            <p class="cardDescription">
                {{ cardDescription }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardSrc: String,
        cardTitle: String,
        cardDescription: String,
        dataOfCrime: String
    }
}
</script>

<style scoped>
.card{
    border: 2px solid #E3F0FA;
    border-radius: 30px;
    width: 90%;
}

img {
    border-radius: 20px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dataOfCrime{
    color: #B1B8C0;
}
.cardDescription{
    color: #697E95;
}
</style>