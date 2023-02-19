<template>
  <section id="home" class="row gz-box">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body typewriter">
          <h6 class="greetings" v-text="greetings.greeting"/>
          <h1 class="card-title dev-name" v-text="greetings.title"/>
          <h1 class="card-title sub-title" v-text="greetings.subTitle"/>
          <p class="card-text caption" v-html="greetings.caption"/>
          <p class="card-text caption" v-if="greetings.resumeEnabled"><a class="btn btn-dark gz-button" href="./resume/resume.pdf" target="_blank">Check out my Resume!</a></p>
        </div>
      </div>
    </div>
  </section>
  <a class="scroll-down" href="#about"></a>
</template>

<script>
import Greetings from "./greetings.json";
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZGreetings',
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

#home {
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  height: 100vh;
}

.greetings {
  font-family: 'Noto Sans Mono', monospace;
  color: v-bind(theme.general.accent);
}

.dev-name {
  color: v-bind(theme.general.txt_important);
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
}

.sub-title {
  color: v-bind(theme.general.secondary);
  font-size: clamp(40px, 8vw, 40px) !important;
}

.card-text {
  color: v-bind(theme.general.txt_color);
  font-size: 18px;
}

.typewriter .dev-name {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(30, end) forwards;
}

.scroll-down {
  position: relative;
  left: 50%;
  bottom:150px;
  display: block;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  width: 25px;
  height: 25px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation:    fade_move_down 4s ease-in-out infinite;
  animation:         fade_move_down 4s ease-in-out infinite;
}

/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
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
