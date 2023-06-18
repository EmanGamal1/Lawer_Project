<template>
    <div class='wrapper container-fluid pb-3 mb-5 pb-5'>
      <div class='container'>
        <h1 class='mb-5 pt-5'>
        تعرف علينا أكثر
        <br />
        من خلال
        <span class='coloredSpan'>أحدث أخبارنا</span>
      </h1>
      <div class='row'>
        <div class='aboutCard col-lg-4'>
          <AboutUsCards 
          cardSrc="/src/assets/images/CardPhotos/CardPhoto1.png"
          dataOfCrime='19 نوفمبــر 2022 / مجـــرم'
          cardTitle='فوائــد أكثـر وراء الدعــم القانــوني'
          cardDescription='نحن نعلم أن الحياة صعبة. لذلك نحاول أن نجعل الأمر بسيطًا: لا خدم أو رسوم قانونية ..'/>
        </div>
        <div class='aboutCard col-lg-4'>
        <AboutUsCards 
          cardSrc="/src/assets/images/CardPhotos/CardPhoto2.png"
          dataOfCrime='19 نوفمبــر 2022 / مجـــرم'
          cardTitle='فوائــد أكثـر وراء الدعــم القانــوني'
          cardDescription='نحن نعلم أن الحياة صعبة. لذلك نحاول أن نجعل الأمر بسيطًا: لا خدم أو رسوم قانونية ..'/>
        </div>
        <div class='aboutCard col-lg-4'>
        <AboutUsCards 
          cardSrc="/src/assets/images/CardPhotos/CardPhoto3.png"
          dataOfCrime='19 نوفمبــر 2022 / مجـــرم'
          cardTitle='فوائــد أكثـر وراء الدعــم القانــوني'
          cardDescription='نحن نعلم أن الحياة صعبة. لذلك نحاول أن نجعل الأمر بسيطًا: لا خدم أو رسوم قانونية ..'/>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import AboutUsCards from "@/sharedComponents/AboutUsCards/AboutUsCards.vue";
  
  export default {
    components: {
      AboutUsCards,
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    background-color: white;
    border-radius: 30px;
    width: 97%;
  }
  @media (max-width: 576px) {
    .aboutCard{
      margin: auto;
      margin-bottom: 10px;
    }
  }
  </style>