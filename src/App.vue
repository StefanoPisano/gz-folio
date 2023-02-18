<template>
  <div class="container-fluid" style="position: relative; min-height: 100vh; padding-bottom: 50px">
    <Navigation @goTo="goTo"/>

    <div id="gz-sections">
      <Greetings v-if="displayMe('GZGreetings')"></Greetings>
      <About v-if="displayMe('GZAbout')"></About>
      <Experience v-if="displayMe('GZExperience')"></Experience>
      <Contacts v-if="displayMe('GZContacts')"></Contacts>

      <template v-if="displayMe('GZBlog')">
        <Blog v-if="displayMe('GZBlog')"></Blog>
      </template>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue';
import Footer from "@/components/footer/Footer.vue";
import Theme from "@/themes/default/theme.json";
import About from "@/components/about/About.vue";
import Experience from "@/components/experience/Experience.vue";
import Greetings from "@/components/greetings/Greetings.vue";
import Contacts from "@/components/contacts/Contacts.vue";
import Blog from "@/components/blog/Blog.vue";

export default {
  name: 'App',
  components: {
    Blog,
    Contacts,
    Greetings,
    Experience,
    About,
    Navigation,
    Footer
  },
  data() {
    return {
      theme: Theme,
      displayingInFS: null,
      routes: this.$routes
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
    },
    goTo(route) {
      if (route.fullScreen) {
        this.displayingInFS = route.name
      } else {
        this.displayingInFS = null;
      }
    },
    displayMe(componentName) {
      return this.routes.find(v => v.enabled && v.name === componentName)
          && (!this.displayingInFS && !this.routes.find(v => v.enabled && v.name === componentName).fullScreen)
          || this.displayingInFS === componentName
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
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
html, body {
  scroll-behavior: smooth;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  line-height: 1.8;
  letter-spacing: 1px;
}

body {
  font-size: .9em;
  text-align: justify;
}

.gz-box:not(#home) {
  margin: 25px 0;
  padding: 100px 0;
}

.gz-title-section {
  color: v-bind(theme.greetings.txt_title);
  font-weight: 600;
}

.card {
  background: transparent;
  border: none;
}

.card-header {
  background: transparent;
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
  margin: 50px 5px 0 5px;
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
  column-gap: 20px;
  font-size: 16px;
  grid-template-columns: 50% 40%;
  justify-content: space-between;
}

.spi-card-content-img-left {
  display: grid;
  column-gap: 25px;
  grid-template-columns:30% auto;
}

@media (max-width: 1024px) {
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
