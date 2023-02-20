<template>
  <section id="experience" class="row gz-box">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header">
          <div class="gz-companies">
            <template v-if="useCarousel">
              <carousel ref="myCarousel" :breakpoints="getBreakPoints" :modelValue="selectedCompany.index">
                <slide v-for="company in listOfCompanies" :key="company">
                  <div :class="selectedCompany.companyCode === company.companyCode ? 'active' : ''"
                       @click="selectedCompany = company">{{ company.label }}
                  </div>
                </slide>

                <template #addons>
                  <navigation/>
                  <pagination/>
                </template>
              </carousel>
            </template>
            <template v-else>
              <div v-for="company in listOfCompanies"
                   v-bind:key="company.companyCode"
                   :class="selectedCompany.companyCode === company.companyCode ? 'active' : ''"
                   @click="selectedCompany = company">{{ company.label }}
              </div>
            </template>

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
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  name: 'GZExperience',
  data() {
    return {
      listOfCompanies: Experience,
      selectedCompany: {},
      theme: Theme,
      useCarousel: false
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
    setUseCarousel() {
      const width = window.innerWidth;
      const noOfCompanies = this.listOfCompanies.length;

      if(200 <=width && width <=300) {
        this.useCarousel = noOfCompanies >= 2;
        return;
      }

      if(300 < width && width <=500) {
        this.useCarousel =  noOfCompanies >= 3;
        return;
      }

      if(500 < width && width <=600) {
        this.useCarousel =  noOfCompanies >= 5;
        return;
      }

      if(600 < width && width <=850) {
        this.useCarousel =  noOfCompanies >= 6;
        return;
      }

      if(850 < width && width <=1000) {
        this.useCarousel =  noOfCompanies >= 7;
        return;
      }

      if(width > 1000) {
        this.useCarousel =  noOfCompanies >= 10;
        return;
      }

      this.useCarousel =  false;
    },
  },
  beforeMount() {
    this.loadTheme();
  },
  computed: {
    getBreakPoints() {
      const w_1300 = this.listOfCompanies.length > 5 ? 6 : this.listOfCompanies.length;
      const w_1000 = this.listOfCompanies.length > 4 ? 5 : this.listOfCompanies.length;
      const w_700 = this.listOfCompanies.length > 3 ? 4 : this.listOfCompanies.length;
      const w_300 = this.listOfCompanies.length > 2 ? 3.5 : this.listOfCompanies.length;
      const w_200 = this.listOfCompanies.length > 1 ? 2.5 : this.listOfCompanies.length;

      return {
        200: {
          itemsToShow: w_200,
          snapAlign: 'center',
        },
        300: {
          itemsToShow: w_300,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: w_700,
          snapAlign: 'start',
        },
        1000: {
          itemsToShow: w_1000,
          snapAlign: 'start',
        },
        1300: {
          itemsToShow: w_1300,
          snapAlign: 'start',
        },
      }
    }
  },
  created() {
    this.selectedCompany = {
      ...this.listOfCompanies.find(v => v.default === true),
      index: this.listOfCompanies.indexOf(this.listOfCompanies.find(v => v.default === true))
    }

    this.$nextTick(() => {
      window.addEventListener('resize', this.setUseCarousel);
    })
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
