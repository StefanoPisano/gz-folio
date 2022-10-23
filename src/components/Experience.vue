<template>
  <div id="spi-experience" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title spi-card-title-border"><span class="index-name">{{ sectionIndex }}</span> <span
              class="section-name">Experience</span></h5>
          <div class="card-text spi-card-content-img-left">
            <ul class="list-group">
              <li v-for="company in listOfCompanies"
                  v-bind:key="company.companyCode"
                  :class="selectedCompany.companyCode === company.companyCode ? 'list-group-item active' : 'list-group-item'"
                  @click="selectedCompany = company">{{ company.companyName }}
              </li>
            </ul>
            <div class="spi-experience-values">
              <div><span class="spi-experience-key">Company Name:</span> {{ selectedCompany.companyName }}</div>
              <div><span class="spi-experience-key">City:</span> {{ selectedCompany.city }}</div>
              <div><span class="spi-experience-key">Job:</span> {{ selectedCompany.job }}</div>
              <div><span class="spi-experience-key">From:</span> {{ selectedCompany.from }}</div>
              <div><span class="spi-experience-key">To:</span> {{ selectedCompany.to }}</div>
              <div><span class="spi-experience-key">Description:</span> {{ selectedCompany.description }}</div>
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
  props: {
    sectionIndex: Number
  },
  data() {
    return {
      listOfCompanies: {
        anoki: {
          companyCode: 'ank',
          companyName: 'ANK',
          city: 'Milan, Italy',
          job: 'Full Stack Developer',
          from: 'Sept 2016',
          to: 'Oct 2020',
          description: 'Full-stack developer on a project for a client leader in the game translation/localization industry.\n' +
              'Responsible for the maintenance team, coordinating other resources to solve issues notified by the client.\n' +
              'I also worked on code refactoring sessions and on the introduction of new technologies like Vue JS.\n' +
              'Software built upon a Model-View-Controller architecture using Java, Spring, Hibernate, JSP, Javascript, JQuery, Vue.js and an SQLServer database.\n' +
              'Used Jenkins as the deployment tool and SonarQube for static analysis of the code.\n' +
              'Occasionally, I was a tutor for new resources. '
        },
        techgap: {
          companyCode: 'tgi',
          companyName: 'TGI',
          city: 'Milan, Italy',
          job: 'Full Stack Developer & Team Lead',
          from: 'Oct 2020',
          to: 'Present',
          description: 'Working as Full-Stack Developer and Team Leader on an International project.\n' +
              'Mainly working on the development of new functionalities, from the analysis paper to the development phase'
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
    this.selectedCompany = this.listOfCompanies['anoki']
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#spi-experience {
  min-height: 500px;
}

.list-group li {
  background: transparent;
  color: #64ffda;
  border-color: #64ffda;
}

.list-group li.active {
  background: #64ffda;
  color: #0a192f;
  border-color: #64ffda;
}

.spi-experience-key {
  color: #64ffda;
}

.spi-experience-values {
  text-align: justify;
}

</style>
