<template>
  <div class="container">
    <Header/>
    <About :section-index="1"/>
    <Experience :section-index="2"/>
    <Contacts :section-index="3"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Contacts from "@/components/Contacts";

export default {
  name: 'App',
  components: {
    Header,
    About,
    Experience,
    Contacts
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');

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

.index-name {
  font-family: 'Noto Sans Mono', monospace;
  color: #64ffda;
}

.index-name::after {
  content: '.'
}

.section-name {
  font-family: 'Noto Sans Mono', monospace;
  color: #ccd6f6;
}

.card {
  background: transparent;
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

.spi-link {
  text-decoration-style: dotted;
}

.spi-card-content-img-right {
  display: grid;
  column-gap: 25px;
  grid-template-columns: auto 30%;
}

.spi-card-content-img-left {
  display: grid;
  column-gap: 25px;
  grid-template-columns:30% auto;
}

@media (max-width: 900px) {
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
    text-align: center;
  }

  .spi-card-content-img-right div:nth-child(2) img {
    border-radius: 0 !important;
    width: 80%;
    margin: auto;
  }
}
</style>
