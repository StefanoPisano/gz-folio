<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="nav-link spi-link" to="/" @click="visible = false">
        <img alt="" class="d-inline-block align-text-top" height="30" src="../../assets/img/avlogo.png" width="30">
      </router-link>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-target="#navbarNav" data-toggle="collapse" type="button"
              @click="visible=!visible">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navContent" :class="!visible?'collapse':'nav-opened'" class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li v-for="(route, i) in routes" v-bind:key="route.name" class="nav-item">
            <router-link :to="route.path" class="nav-link spi-link" @click="visible = false"><span
                class="spi-index">{{ i + 1 }}.</span> {{ route.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Theme from "@/themes/default/theme.json";

export default {
  name: 'SPNavigation',
  data() {
    return {
      routes: this.$router.options.routes,
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

.spi-index {
  color: v-bind(theme.navigation.txt_menuIndexColor)
}

</style>
