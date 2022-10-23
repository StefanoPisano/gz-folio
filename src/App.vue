<template>
  <div class="container">
    <Header/>
    <About :section-index="1"/>
    <Experience :section-index="2"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Experience
  }
}
</script>

<style>
body {
  background: #0a192f;
  color: #5a6681;
}

.index-name {
  color: #64ffda;
  font-size: 1.2em;
}

.index-name::after {
  content: ' . '
}

.section-name {
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
</style>
