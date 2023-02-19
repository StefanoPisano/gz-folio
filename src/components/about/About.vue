<template>
  <section id="about" class="gz-box">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="card-body">
              <div class="gz-card-content-img-right">
                <div>
                  <div class="card-text about-text" v-html="about.about"/>
                  <ul class="gz-list">
                    <li v-for="(passion, i) in about.passions" v-bind:key="i" v-text="passion"/>
                  </ul>
                </div>
                <div class="img-wrapper">
                  <div class="img-container">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row music" v-for="(favourite, index) in about.listOfFavourites" v-bind:key="index">
      <div class="col-md-8 offset-md-2">
        <a :href="favourite.link" class="btn btn-dark gz-button" type="button">
          <span class="favourite-label" v-text="favourite.label"/><br/><br/>
          <font-awesome-icon icon="fas fa-headphones"/>
          <span class="favourite-title" v-text="favourite.title"/> by <span class="favourite-artist"
                                                                            v-text="favourite.artist"/>
        </a>
      </div>
    </div>
  </section>

</template>

<script>

import About from "./about.json";
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZAbout',
  data() {
    return {
      about: About,
      theme: Theme,
    }
  },
  methods: {
    async loadTheme() {
      if (this.$theme && this.$theme !== 'default') {
        const themeLoad = () => import(`@/themes/${this.$theme}/theme.json`);
        this.theme = await themeLoad();
      }
    },
  },
  beforeMount() {
    this.loadTheme();
  }
}
</script>

<style scoped>
#about .row {
  margin-bottom: 10px;
}

#about .gz-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  columns: 2 !important;
  font-family: 'Noto Sans Mono', monospace;
  font-size: 16px;
  white-space: nowrap;
}

#about .gz-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

#about .gz-list li::before {
  content: "▹";
  color: v-bind(theme.general.accent);
  position: absolute;
  left: 0;
}

#about .img-wrapper {
  height: fit-content;
  border-radius: 10px;
  background-color: v-bind(theme.general.accent);
}

#about .img-container:hover {
  mix-blend-mode: normal;
}

#about .img-container {
  position: relative;
  filter: grayscale(100%) contrast(1);
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  mix-blend-mode: multiply;
  background-image: url("@/assets/img/about.png");
  background-size: cover;
  height: 400px;
  background-position: center;
}

#about .music {
  text-align: center;
}

#about .music a {
  white-space: nowrap;
  width:350px;
}

#about .favourite-label {
  font-size: 18px;
  color: v-bind(theme.general.txt_important);
}

#about .favourite-artist, #about .favourite-title {
  font-family: 'Noto Sans Mono', monospace;
  font-size: 12px;
  letter-spacing: 0;
}

#about .favourite-artist {
  color: v-bind(theme.general.txt_secondary);;
}

#about .favourite-title {
  color: v-bind(theme.general.accent);
  margin-left: 10px
}

@media (max-width: 350px) {
  #about .gz-list {
    grid-template-columns: auto;
  }

  #about .favourite-label{
    font-size: 12px;
  }

  #about .favourite-artist, #about .favourite-title, #about .music a {
    font-size: 10px;
  }
}

@media (max-width: 500px) {
  #about .music a {
    width:100%
  }
}

</style>
