<template>
  <div id="spi-experience" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <div class="card-text spi-card-content-img-left">
            <ul class="list-group">
              <li v-for="company in listOfCompanies"
                  v-bind:key="company.companyCode"
                  :class="selectedCompany.companyCode === company.companyCode ? 'list-group-item active' : 'list-group-item'"
                  @click="selectedCompany = company">{{ company.label }}
              </li>
            </ul>
            <div class="spi-experience-values">
              <div class="company-header">{{ selectedCompany.job }} @<span
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
export default {
  name: 'SPExperience',
  data() {
    return {
      listOfCompanies: {
        ank: {
          companyCode: 'ank',
          label: 'ANK',
          companyName: 'Anoki S.r.l.',
          city: 'Milan, Italy',
          job: 'Full Stack Developer',
          from: 'Sept 2016',
          to: 'Oct 2020',
          tags: ['JAVA', 'Spring', 'Vue', 'jQuery', 'Javascript', 'Jenkins', 'SQL Server', 'Jasper'],
          jobDescriptions: ['Full-stack developer on a project for a client leader in the game translation/localization industry.',
            'Responsible for the maintenance team, coordinating other resources to solve issues notified by the client.',
            'Code Refactoring sessions to improve readability and performances.',
            'Introduction of new technologies like Vue.js for the frontend side of the application.',
            'Used Jenkins as the deployment tool and SonarQube for static analysis of the code.',
            'Tutoring activities for new entries.']
        },
        tgi: {
          companyCode: 'tgi',
          label: 'TGI',
          companyName: 'Tech Gap Italia',
          city: 'Milan, Italy',
          job: 'Full Stack Developer & Team Leader',
          from: 'Oct 2020',
          to: 'Present',
          tags: ['JAVA', 'Spring', 'Vue', 'Jenkins', 'AWS'],
          jobDescriptions: ['Working as Full-Stack Developer on new functionalities.',
            'Team Leader on an International project. Managing team work and communication with the client.',
            'Tutoring activities for new entries.']
        }
      },
      selectedCompany: {}
    }
  },
  methods: {
    getJob(company) {
      this.selectedCompany = this.listOfCompanies[company];
    }
  },
  created() {
    this.selectedCompany = this.listOfCompanies['tgi']
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-header {
  color: #ccd6f6;
  font-weight: bolder;
  font-size: 24px
}

.company-name {
  color: #64ffda;
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
  background: #64ffda;
  width: 80px;
  border-radius: 2px;
  padding: 2px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
}

.list-group li {
  background: transparent;
  color: #64ffda;
  border-color: #64ffda;
  font-family: 'Noto Sans Mono', monospace;
}

.list-group li.active {
  background: #64ffda;
  color: #0a192f;
  border-color: #64ffda;
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
  color: #64ffda;
  position: absolute;
  left: 0;
}

</style>
