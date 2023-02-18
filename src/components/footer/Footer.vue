<template>
  <section id="gz-footer" class="row position-absolute bottom-0 w-100 pb-3">
    <div class="col-md-8 offset-md-2">
      <footer>Coded with <span class="heart">&hearts;</span> by <a class="spi-link"
                                                                   href="https://github.com/StefanoPisano">Stefano
        Pisano</a></footer>
    </div>
  </section>
</template>

<script>
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZFooter',
  data() {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gz-footer {
  color: v-bind(theme.footer.txt_footer);
  text-align: center;
  font-family: 'Noto Sans Mono', monospace;
  font-size: .8em;
}

#gz-footer .heart {
  color: v-bind(theme.footer.heart)
}

@media (max-width: 1024px) {
  #spi-footer {
    position: relative;
  }
}
</style>
