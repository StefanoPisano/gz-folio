<template>
  <div id="spi-header" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body typewriter">
          <h6 class="greetings" v-text="greetings.greeting"/>
          <h1 class="card-title dev-name" v-text="greetings.title"/>
          <h1 class="card-title sub-title" v-text="greetings.subTitle"/>
          <p class="card-text caption" v-html="greetings.caption"/>
          <p class="card-text caption" v-if="greetings.resumeEnabled"><a class="btn btn-dark spi-button" href="./resume/resume.pdf" target="_blank">Check out my Resume!</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Greetings from "./greetings.json";
import Theme from "@/themes/default/theme.json";

export default {
  name: 'SPGreetings',
  data() {
    return {
      greetings: Greetings,
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
  },
}
</script>

<style scoped>

#spi-header {
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
}

.greetings {
  font-family: 'Noto Sans Mono', monospace;
  color: v-bind(theme.greetings.txt_greetings);
}

.card {
  background: transparent;
  border: none;
}

.dev-name {
  color: v-bind(theme.greetings.txt_title);
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
}

.sub-title {
  color: v-bind(theme.greetings.txt_subTitle);
  font-size: clamp(40px, 8vw, 40px) !important;
}

.card-text {
  color: v-bind(theme.greetings.txt_caption);
  font-size: 18px;
}

.typewriter .dev-name {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(30, end) forwards;
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}
</style>
