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
import Theme from "@/themes/default/theme.json";

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    // Theme: () => import(`@/themes/${this.$theme}/${this.$theme}.json`)
  },
  data() {
    return {
      theme: Theme,
    }
  },
  methods: {
    async loadTheme() {
      if (this.$theme && this.$theme !== 'default') {
        console.info("Loading %s theme.", this.$theme);
        const themeLoad = () => import(`@/themes/${this.$theme}/theme.json`);
        this.theme = await themeLoad();

        this.setBodyStyle();
      }
    },
    setBodyStyle() {
      document.querySelector('body').style.backgroundColor = this.theme.general.background;
      document.querySelector('body').style.color = this.theme.general.textColor;
    }
  },
  beforeMount() {
    this.setBodyStyle();

    this.loadTheme();
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

body {
  font-size: .9em;
  text-align: justify;
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
  color: v-bind(theme.general.txt_buttons);
  background-color: transparent;
  border: 1px solid v-bind(theme.general.buttonsBorders);
  border-radius: 2px;
  padding: 1rem 1rem;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin-top: 50px;
}

.spi-link {
  color: v-bind(theme.general.txt_links) !important;
  font-family: 'Noto Sans Mono', monospace !important;
}

.spi-link-dotted {
  color: v-bind(theme.general.txt_links);
  font-family: 'Noto Sans Mono', monospace;
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
