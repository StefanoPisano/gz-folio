<template>
  <section id="gz-footer" class="row position-absolute bottom-0 w-100 pb-3">
    <div class="col-md-8 offset-md-2">
      <footer>
        <p>
          Coded with <span class="heart">&hearts;</span> by <a class="gz-link" href="https://github.com/StefanoPisano">Stefano Pisano</a>
        </p>
        <p><a class="gz-link" href="https://github.com/StefanoPisano/gz-folio">Source code</a> under <a class="gz-link" href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
        <div class="gz-tags">Version {{version}}</div>
      </footer>
    </div>
  </section>
</template>

<script>
import Theme from "@/themes/default/theme.json";
import {version} from '@/../package.json'

export default {
  name: 'GZFooter',
  data() {
    return {
      theme: Theme,
      version: version
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
  color: v-bind(theme.general.txt_color);
  text-align: center;
  font-family: 'Noto Sans Mono', monospace;
  font-size: .8em;
  line-height: 8px;
}

#gz-footer .heart {
  color: v-bind(theme.footer.heart)
}

@media (max-width: 1024px) {
  #gz-footer {
    position: relative;
  }
}
</style>
