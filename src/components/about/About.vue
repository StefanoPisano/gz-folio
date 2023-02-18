<template>
  <section id="about" class="row gz-box">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div class="spi-card-content-img-right">
              <div>
                <div class="card-text about" v-html="data.about"/>
                <ul class="spi-list">
                  <li v-for="(passion, i) in data.passions" v-bind:key="i" v-text="passion"/>
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
  </section>
</template>

<script>

import About from "./about.json";
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZAbout',
  data() {
    return {
      data: About,
      theme: Theme
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

<style>
.spi-list {
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

.spi-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.spi-list li::before {
  content: "▹";
  color: v-bind(theme.about.passionsArrows);
  position: absolute;
  left: 0;
}

.about {
  color: v-bind(theme.about.txt_about)
}

.colored-text {
  color: v-bind(theme.general.txt_colored);
}

.disabled-text {
  text-decoration: line-through;
}

.img-wrapper {
  height: fit-content;
  border-radius: 10px;
  background-color: v-bind(theme.about.img_overlay);
}

.img-wrapper:hover {
  background-color: transparent;
}

.img-container:hover {
  mix-blend-mode: normal;
}

.img-container {
  position: relative;
  filter: grayscale(100%) contrast(1);
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  mix-blend-mode: multiply;
  background-image: url("@/assets/img/avatar_00.jpg");
  background-size: cover;
  height: 400px;
  background-position: center;
}
</style>
