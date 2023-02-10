<template>
  <div id="spi-experience" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <div class="card-text spi-card-content-img-left">
            <ul class="list-group companies">
              <li v-for="company in listOfCompanies"
                  v-bind:key="company.companyCode"
                  :class="selectedCompany.companyCode === company.companyCode ? 'list-group-item active' : 'list-group-item'"
                  @click="selectedCompany = company">{{ company.label }}
              </li>
            </ul>
            <div class="spi-experience-values">
              <div class="company-role">{{ selectedCompany.job }} @<span
                  class="company-name">{{ selectedCompany.companyName }}</span></div>
              <div class="company-city">{{ selectedCompany.city }}</div>
              <div class="company-period">{{ selectedCompany.from }} - {{ selectedCompany.to }}</div>
              <div class="job-tags">
                <div v-for="(item, index) in selectedCompany.tags" v-bind:key="index"
                     v-html="item"></div>
              </div>
              <ul class="job-list">
                <li v-for="(item, index) in selectedCompany.jobDescriptions" v-bind:key="index" v-html="item"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Experience from "./experience.json";
import Theme from "@/themes/default/theme.json";

export default {
  name: 'SPExperience',
  data() {
    return {
      listOfCompanies: Experience,
      selectedCompany: {},
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
  created() {
    this.selectedCompany = this.listOfCompanies.find(v => v.default === true);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-role {
  color: v-bind(theme.experience.txt_companyRole);
  font-weight: bolder;
  font-size: 24px
}

.company-name {
  color: v-bind(theme.experience.txt_company);
}

.company-period, .company-city {
  font-family: 'Noto Sans Mono', monospace;
  font-size: 12px;
}

.job-tags div {
  font-family: 'Noto Sans Mono', monospace;
  white-space: nowrap;
  font-size: 10px;
  margin: 0 2px;
  background: v-bind(theme.experience.bg_tags);
  color: v-bind(theme.experience.txt_tags);
  width: 80px;
  border-radius: 2px;
  padding: 2px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}

.companies li {
  background: transparent;
  color: v-bind(theme.experience.txt_companiesMenu);
  border-color: v-bind(theme.experience.companiesMenuBorder);
  font-family: 'Noto Sans Mono', monospace;
}

.companies li.active {
  background: v-bind(theme.experience.bg_companiesMenuSelected);
  color: v-bind(theme.experience.txt_companiesMenuSelected);
  border-color: v-bind(theme.experience.companiesMenuBorderSelected)
}

.spi-experience-values {
  text-align: justify;
}

.job-list {
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  font-size: 16px;
}

.job-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.job-list li::before {
  content: "▹";
  color: v-bind(theme.experience.descriptionArrows);
  position: absolute;
  left: 0;
}

</style>
