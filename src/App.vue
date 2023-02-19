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
      document.querySelector('body').style.color = this.theme.general.txt_color;
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
  color: v-bind(theme.general.txt_important);
  font-weight: 600;
}

.gz-jumbo {
  border: 1px solid v-bind(theme.general.accent)
}

.card, .card-header {
  background: transparent;
  border: none
}

.gz-button {
  color: v-bind(theme.general.accent);
  background-color: transparent;
  border: 1px solid v-bind(theme.general.accent);
  border-radius: 2px;
  padding: 1rem 1rem;
  font-size: 14px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  margin: 50px 5px 0 5px;
}

.gz-link {
  color: v-bind(theme.general.accent) !important;
  font-family: 'Noto Sans Mono', monospace !important;
}

.gz-card-content-img-right {
  display: grid;
  column-gap: 20px;
  font-size: 16px;
  grid-template-columns: 50% 40%;
  justify-content: space-between;
}

.gz-tags {
  font-family: 'Noto Sans Mono', monospace;
  white-space: nowrap;
  font-size: 10px;
  margin: 0 2px;
  background: v-bind(theme.general.accent);
  border-radius: 2px;
  padding: 2px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}

.gz-tags {
  color: v-bind(theme.general.txt_color);
}

.colored-text {
  color: v-bind(theme.general.accent);
}

.disabled-text {
  text-decoration: line-through;
}

@media (max-width: 1024px) {
  .gz-card-content-img-right {
    display: grid;
    row-gap: 25px;
    grid-auto-flow: row;
    grid-template-columns: 100%;
  }

  .gz-card-content-img-right :nth-child(2) {
    grid-area: 1;
  }

  .gz-card-content-img-right div:nth-child(2) img {
    border-radius: 0 !important;
    margin: auto;
  }
}
</style>
