<template id="/">
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/img/logo_navbar.png" alt="" height="24">
      </a>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-target="#navbarNav" data-toggle="collapse" type="button"
              @click="visible=!visible">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navContent" :class="!visible?'collapse':'nav-opened'" class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li v-for="(route, i) in enabledRoutes" v-bind:key="route.name" class="nav-item">
            <a :href="'#' + route.path" class="nav-link gz-link" @click="goTo(route)"><span
                class="gz-index">{{ i + 1 }}.</span> {{ route.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZNavigation',
  data() {
    return {
      routes: this.$routes,
      visible: false,
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
    goTo(route) {
      this.visible = false;

      this.$emit("goTo", route)
    }
  },
  computed: {
    enabledRoutes() {
      return this.routes.filter(v => v.enabled)
    }
  },
  beforeMount() {
    this.loadTheme();
  },
}
</script>

<style scoped>
nav {
  margin-bottom: 500px;
  backdrop-filter: blur(90px);
}

.nav-opened {
  height: 100vh;
  font-size: 24px
}

.gz-index {
  color: v-bind(theme.navigation.txt_menuIndexColor)
}

</style>
