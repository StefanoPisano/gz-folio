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
            <a v-if="prj.link" :href="prj.link" class="btn btn-dark gz-button" target="_blank">
              <font-awesome-icon icon="fas fa-link"/>
            </a>
            <button v-if="prj.details.description" @click="selectedProject=prj" class="btn btn-dark gz-button"
                    data-bs-toggle="modal" data-bs-target="#project-detail">
              <font-awesome-icon icon="fas fa-plus"/>
              Info
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="text-align: center">
      <div class="col-md-8 offset-md-2 skillFilters">
        <button :class="tag===selectedTag ? 'btn btn-dark gz-button active' : 'btn btn-dark gz-button'"
                v-for="(tag, index) in availableTags" v-bind:key="index" v-text="tag"
                @click="filterProjects(tag)"></button>
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
                <img v-if="selectedProject.details.image_one" class="img-fluid" :src="selectedProject.details.image_one">
                <img v-if="selectedProject.details.image_two" class="img-fluid" :src="selectedProject.details.image_two">
                <img v-if="selectedProject.details.image_three" class="img-fluid" :src="selectedProject.details.image_three">
              </div>
              <div class="col-md-2"/>
            </div>
          </div>
          <div class="modal-footer">
            <a v-if="selectedProject.link" :href="selectedProject.link" class="btn btn-dark gz-button" target="_blank">
              <font-awesome-icon icon="fas fa-link"/>
            </a>
            <button type="button" class="btn btn-dark gz-button" data-bs-dismiss="modal">
              <font-awesome-icon icon="fas fa-times"/>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 5rem">
      <div class="col-md-8 offset-md-2">
        <div class="ranking">
          <div v-for="(tag,index) in skillRankings" v-bind:key="index" class="ranking-row">
            <template v-if="index=== 0">
              <img class="img-fluid medal" src="@/assets/img/gz-private/medals/gold.png">
            </template>
            <template v-else-if="index===1">
              <img class="img-fluid medal" src="@/assets/img/gz-private/medals/argent.png">
            </template>
            <template v-else-if="index===2">
              <img class="img-fluid medal" src="@/assets/img/gz-private/medals/bronze.png">
            </template>
            <template v-else>
              <div></div>
            </template>

            <div v-text="tag[0]"></div>
            <div>{{ tag[1] }} %</div>
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
      selectedTag: null,
      skillRankings: []
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
    filterProjects(tag) {
      if (tag === this.selectedTag) {
        this.selectedTag = null;
        this.filteredProjects = this.projects;
      } else {
        this.selectedTag = tag;
        this.filteredProjects = this.projects.filter(v => v.tags.indexOf(tag) !== -1);
      }
    },
    countTagOccurencies(skills) {
      let rankOccuriences = {};
      for (const skill of skills) {
        rankOccuriences[skill] = rankOccuriences[skill] ? rankOccuriences[skill] + 1 : 1;
      }

      let totalOccurencies = 0;
      for (let skill in rankOccuriences) {
        totalOccurencies += rankOccuriences[skill];
      }


      for (let skill in rankOccuriences) {
        this.skillRankings.push([skill, parseFloat(rankOccuriences[skill] * 100 / totalOccurencies).toFixed(0)]);
      }

      this.skillRankings.sort(function (a, b) {
        return b[1] - a[1]
      });
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
          landing: v.details ? require(`@/assets/img/projects/${v.details.banner}`) : null,
          image_one: v.details ?
              v.details.image_one ?
                  require(`@/assets/img/projects/${v.details.image_one}`) : null
              : null,
          image_two: v.details ?
              v.details.image_two ?
                  require(`@/assets/img/projects/${v.details.image_two}`) : null
              : null,
          image_three: v.details ?
              v.details.image_three ?
                  require(`@/assets/img/projects/${v.details.image_three}`) : null
              : null,
        }
      }
    })

    let tags = [];
    this.projects.map(v => tags = [...tags, ...v.tags])
    this.availableTags = new Set(tags);
    this.filteredProjects = this.projects;

    this.countTagOccurencies(tags);
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

#projects .skillFilters {
  display: flex;
  justify-content: center;
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

#projects .ranking {
  max-width: 50%;
  margin: auto;
}

#projects .ranking .medal {
  width: 36px
}

#projects .ranking div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin: 1rem 0;
  column-gap: 1rem;
  color: v-bind(theme.general.accent);
  font-family: 'Noto Sans Mono', monospace;
}

#projects .ranking .ranking-row:nth-of-type(1) {
  transform: scale(1.12);
  opacity: .9;
}

#projects .ranking .ranking-row:nth-of-type(2) {
  transform: scale(1.1);
  opacity: .7;
}

#projects .ranking .ranking-row:nth-of-type(3) {
  transform: scale(1.05);
  opacity: .6;
}

#projects .ranking .ranking-row {
  opacity: .4;
}

#projects .ranking-row:nth-child(1) {
  flex-basis: 80px;
}

#projects .ranking .ranking-row:nth-child(2) {
  flex-basis: 100px;
}

#projects .ranking .ranking-row:nth-child(3) {
  flex-basis: 20px;
}

#projects .ranking .ranking-row {
  border: 1px solid v-bind(theme.general.accent);
  border-radius: 25px;
  background: linear-gradient(90deg, v-bind(theme.general.gradient_start) 50%, v-bind(theme.general.gradient_middle) 85%, v-bind(theme.general.gradient_end) 100%);
}


@media (max-width: 300px) {
  #projects .skillFilters {
    display: none;
  }

  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }

  #projects .ranking .medal {
    width: 24px
  }

  #projects .ranking div {
    font-size: 12px;
  }
}

@media (min-width: 301px) and (max-width: 595px) {
  #projects .ranking {
    max-width: 90%;
  }

  #projects .skillFilters {
    display: none;
  }

  #project-detail .row.details-gallery div {
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  #project-detail .details-gallery img {
    width: 90%;
  }

  #projects .ranking .medal {
    width: 30px
  }

  #projects .ranking div {
    font-size: 12px;
  }
}

@media (min-width: 596px) and (max-width: 767px) {
  #projects .ranking {
    max-width: 80%;
  }

  #projects .skillFilters {
    display: none;
  }

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
  #projects .ranking {
    max-width: 80%;
  }

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
