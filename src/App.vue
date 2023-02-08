<template>
  <div class="container-fluid" style="position: relative; min-height: 100vh; padding-bottom: 50px">
    <Navigation/>

    <div id="spi-router">
      <router-view></router-view>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue';
import Footer from "@/components/footer/Footer.vue";

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}


body {
  background: #0a192f;
  color: #5a6681;
  font-size: .9em;
  text-align: justify;
}

a {
  font-family: 'Noto Sans Mono', monospace;
  color: #64ffda !important;
}

#spi-router {
  margin-top: 15%;
}

.card {
  background: transparent;
  border: none;
}

.spi-card-title-border {
  border-bottom: 1px solid;
}

.spi-button {
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 2px;
  padding: 1rem 1rem;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
}

.spi-navigation-link {
  font-size: 14px;
  font-family: 'Noto Sans Mono', monospace;
  border: none;
  color: #64ffda;
  background-color: transparent;
  margin: 0 .5%;
}

.spi-navigation-link-disabled {
  color: #ccd6f6;
  text-decoration: line-through;
}

.spi-index {
  font-family: 'Noto Sans Mono', monospace;
  color: #ccd6f6;
}

.spi-link {
  text-decoration-style: dotted;
}

.spi-card-content-img-right {
  display: grid;
  column-gap: 25px;
  font-size: 16px;
  line-height: 1.3;
  grid-template-columns: 40% 30%;
  justify-content: center;
}

.spi-card-content-img-left {
  display: grid;
  column-gap: 25px;
  grid-template-columns:30% auto;
}

@media (max-width: 1024px) {
  #spi-router {
    margin-top: 20%;
  }

  .spi-card-content-img-left {
    grid-template-columns: 100%;
    row-gap: 25px;
  }

  .spi-card-content-img-right {
    display: grid;
    row-gap: 25px;
    grid-auto-flow: row;
    grid-template-columns: 100%;
  }

  .spi-card-content-img-right :nth-child(2) {
    grid-area: 1;
  }

  .spi-card-content-img-right div:nth-child(2) img {
    border-radius: 0 !important;
    margin: auto;
  }
}
</style>
