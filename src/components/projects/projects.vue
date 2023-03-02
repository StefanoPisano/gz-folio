<template>
  <section id="projects" class="gz-box">
    <div class="row">
      <div class="col-md-8 offset-md-2 gz-projects">
        <div class="card" style="width: 18rem;" v-for="(prj, index) in filteredProjects" v-bind:key="index">
          <img class="card-img-top" :src="prj.logo" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title gz-prj-title" v-text="prj.title"/>
            <h6 class="card-subtitle mb-2 text-muted">
              <span class="gz-tags" v-for="(tag,index) in prj.tags" v-bind:key="index">{{ tag }}</span>
            </h6>
            <p class="card-text gz-prj-description">{{ shortener(prj.description) }}</p>
            <a :href="prj.link" class="btn btn-dark gz-button" target="_blank"><font-awesome-icon icon="fas fa-link"/></a>
            <button v-if="prj.details.description" @click="selectedProject=prj" class="btn btn-dark gz-button"
                    data-bs-toggle="modal" data-bs-target="#project-detail"><font-awesome-icon icon="fas fa-plus"/> Info
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="text-align: center">
      <div class="col-md-8 offset-md-2">
        <div class="btn-group" role="group" aria-label="skill tags">
          <button :class="tag===selectedTag ? 'btn btn-dark gz-button active' : 'btn btn-dark gz-button'"
                  v-for="(tag, index) in availableTags" v-bind:key="index" v-text="tag"
                  @click="filterProjects(tag)"></button>
        </div>
      </div>
    </div>


    <div class="modal fade" id="project-detail" tabindex="-1" aria-labelledby="project-detail-label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-header">
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <img class="img-fluid" :src="selectedProject.details.landing" alt="Banner"/>
              </div>
              <div class="col-md-8 offset-md-2 details-tags">
                <span class="gz-tags" v-for="(tag,index) in selectedProject.tags" v-bind:key="index">{{ tag }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 offset-md-2" v-html="selectedProject.details.description"/>
            </div>
            <div class="row details-gallery">
              <div class="col-md-2"/>
              <div class="col-md-8">
                <img  class="img-fluid" :src="selectedProject.logo">
                <img  class="img-fluid" :src="selectedProject.logo">
                <img  class="img-fluid" :src="selectedProject.logo">
              </div>
              <div class="col-md-2"/>
            </div>
          </div>
          <div class="modal-footer">
            <a :href="selectedProject.link" class="btn btn-dark gz-button" target="_blank"><font-awesome-icon icon="fas fa-link"/></a>
            <button type="button" class="btn btn-dark gz-button" data-bs-dismiss="modal"><font-awesome-icon icon="fas fa-times"/>
              Close</button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

import Theme from "@/themes/default/theme.json";
import Projects from "./projects.json";

export default {
  name: 'GZProjects',
  data() {
    return {
      theme: Theme,
      projects: Projects,
      filteredProjects: [],
      selectedProject: {
        details: {
          description: ''
        }
      },
      textLimit: 500,
      availableTags: [],
      selectedTag: null
    }
  },
  methods: {
    async loadTheme() {
      if (this.$theme && this.$theme !== 'default') {
        const themeLoad = () => import(`@/themes/${this.$theme}/theme.json`);
        this.theme = await themeLoad();
      }
    },
    shortener(text) {
      if (!text) {
        return '';
      }

      if (text.length > this.textLimit) {
        return text.substring(0, this.textLimit) + '...';
      }

      return text;
    },
    getBanner() {
      return `/details/${this.selectedProject.details.banner}`
    },
    filterProjects(tag) {
      if (tag === this.selectedTag) {
        this.selectedTag = null;
        this.filteredProjects = this.projects;
      } else {
        this.selectedTag = tag;
        this.filteredProjects = this.projects.filter(v => v.tags.indexOf(tag) !== -1);
      }
    }
  },
  beforeMount() {
    this.loadTheme();
  },
  created() {
    this.projects = this.projects.map(v => {
      return {
        ...v,
        logo: require(`@/assets/img/projects/${v.logo}`),
        details: {
          ...v.details,
          landing: v.details ? require(`@/assets/img/projects/${v.details.banner}`) : null
        }
      }
    })

    let tags = [];
    this.projects.map(v => tags = [...tags, ...v.tags])
    this.availableTags = new Set(tags);
    this.filteredProjects = this.projects;
  }
}
</script>

<style scoped>
#projects .gz-projects {
  display: flex;
  -moz-column-gap: 10rem;
  column-gap: 10rem;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 5rem;
}

#projects .gz-projects .gz-prj-description {
  line-height: 15px;
  font-size: 12px;
}

#projects .gz-projects .gz-prj-title {
  color: v-bind(theme.general.accent);
}

#projects .gz-projects .gz-button {
  margin: 0 1%;
}

#projects .modal-content {
  background: v-bind(theme.general.background);
}

#projects .modal-footer, #projects .modal-header {
  border: none;
}

#project-detail .details-link, #project-detail .details-tags, #project-detail .details-gallery {
  text-align: center;
  margin-bottom: 3%;
  margin-top: 3%;
}

#project-detail .row.details-gallery div {
  display: flex;
  justify-content: space-between;
  column-gap: .2rem;
}

#project-detail .details-gallery img {
  width: 32%;
}

@media (max-width: 300px)  {
  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }
}

@media (min-width: 301px) and (max-width: 595px) {
  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }
}

@media (min-width: 596px) and (max-width: 767px){
  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }

}


</style>
