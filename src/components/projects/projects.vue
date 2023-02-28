<template>
  <section id="projects" class="row gz-box">
    <div class="col-md-8 offset-md-2 gz-projects">
      <div class="card" style="width: 18rem;" v-for="(prj, index) in projects" v-bind:key="index">
        <img class="card-img-top" src="@/assets/img/about.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title gz-prj-title" v-text="prj.title"/>
          <p class="card-text gz-prj-description">{{shortener(prj.description)}}</p>
          <a :href="prj.link" class="btn btn-dark gz-button">Visit</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Theme from "@/themes/default/theme.json";
import Projects from "./projects.json";

export default {
  name: 'GZProjects',
  data() {
    return {
      theme: Theme,
      projects: Projects,
      textLimit: 500
    }
  },
  methods: {
    async loadTheme() {
      if (this.$theme && this.$theme !== 'default') {
        const themeLoad = () => import(`@/themes/${this.$theme}/theme.json`);
        this.theme = await themeLoad();
      }
    },
    shortener(text) {
      if(!text) {
        return ''
      }

      if(text.length > this.textLimit) {
        return text.substring(0, this.textLimit) + '...';
      }

      return text;
    }
  },
  beforeMount() {
    this.loadTheme();
  },
  created() {
  }
}
</script>

<style scoped>
#projects .gz-projects {
  display: flex;
  -moz-column-gap: 10rem;
  column-gap: 10rem;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 5rem;
}

#projects .gz-projects .gz-prj-description {
  line-height: 15px;
  font-size: 12px;
}

#projects .gz-projects .gz-prj-title {
  color: v-bind(theme.general.accent)
}

#projects .gz-projects .gz-button {
  margin: 0;
}
</style>
