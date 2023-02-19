<template>
  <section id="experience" class="row gz-box">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <div class="gz-companies">
          <carousel ref="myCarousel" :breakpoints="breakpoints" :modelValue="selectedCompany.index">
            <slide v-for="company in listOfCompanies" :key="company">
              <div  :class="selectedCompany.companyCode === company.companyCode ? 'active' : ''"
                   @click="selectedCompany = company">{{ company.label }}
              </div>
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
          </div>
        </div>

        <div class="card-body">
          <div class="card-text">
            <div class="gz-job">
              <div class="company-role">{{ selectedCompany.job }} @<span
                  class="gz-company">{{ selectedCompany.companyName }}</span></div>
              <div class="gz-city">{{ selectedCompany.city }}</div>
              <div class="gz-job-period">{{ selectedCompany.from }} - {{ selectedCompany.to }}</div>
              <div>
                <div class="gz-tags" v-for="(item, index) in selectedCompany.tags" v-bind:key="index"
                     v-text="item"></div>
              </div>
              <ul class="gz-job-description">
                <li v-for="(item, index) in selectedCompany.jobDescriptions" v-bind:key="index" v-html="item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Experience from "./experience.json";
import Theme from "@/themes/default/theme.json";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  name: 'GZExperience',
  data() {
    return {
      listOfCompanies: Experience,
      selectedCompany: {},
      theme: Theme,
      breakpoints: {
        200: {
          itemsToShow: 2.5,
          snapAlign: 'center',
        },
        300: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 4,
          snapAlign: 'start',
        },
        1000: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
        1300: {
          itemsToShow: 6,
          snapAlign: 'start',
        },
      },
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
  created() {

    this.selectedCompany = {
      ...this.listOfCompanies.find(v => v.default === true),
      index: this.listOfCompanies.indexOf(this.listOfCompanies.find(v => v.default === true))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gz-job {
  text-align: center;
}

.company-role {
  color: v-bind(theme.experience.txt_companyRole);
  font-weight: bolder;
  font-size: 24px
}

.gz-company {
  color: v-bind(theme.general.accent);
}

.gz-job-period, .gz-city {
  font-family: 'Noto Sans Mono', monospace;
  font-size: 12px;
}

.gz-tags {
  width: 80px;
}

.gz-companies {
  text-align: center;
}

.gz-companies div {
  background: transparent;
  color: v-bind(theme.general.accent);
  border: 1px solid v-bind(theme.general.accent);
  font-family: 'Noto Sans Mono', monospace;
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 64px;
  text-align: center;
  margin: 1%
}

.gz-companies div.active {
  background: v-bind(theme.general.accent);
  color: v-bind(theme.experience.txt_companiesMenuSelected);
  border-color: v-bind(theme.general.accent)
}

.gz-job-description {
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gz-job-description li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.gz-job-description li::before {
  content: "▹";
  color: v-bind(theme.general.accent);
  position: absolute;
  left: 0;
}
</style>
