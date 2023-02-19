<template>
  <section id="gz-blog" class="gz-box">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="gz-articles" v-if="!content">
          <input v-model="filterSearch" class="form-control" placeholder="Search..." type="text"/>
          <div v-for="post in filteredPosts" v-bind:key="post.id" class="gz-article-preview"
               @click="viewPostContent(post.id)">

            <div class="gz-title" v-text="post.title"/>
            <div class="gz-desc" v-html="post.description"/>
            <div class="gz-author"><strong>Author:</strong> {{ post.author }}</div>
            <div class="gz-date"><strong>Date:</strong> {{ post.date }}</div>
            <hr/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="blog-post-container" v-if="content">
          <button class="btn btn-dark gz-button gz-float" @click="selected=null; content=null" style="margin: 1px">
            <font-awesome-icon icon="fa-solid fa-rotate-left"/>
          </button>
          <div class="gz-post">
            <div class="mt-4 p-5 rounded gz-jumbo">
              <h1>
                {{ content.title }}
              </h1>
              <p>{{ content.description }}</p>
              <span class="gz-tags">{{ content.author }}</span> <span class="gz-tags">{{ content.date }}</span>
            </div>

            <hr/>
            <div class="gz-post" v-html="content.content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import {marked} from 'marked';
import posts from '@/assets/posts/posts.json';
import Theme from "@/themes/default/theme.json";

export default {
  name: 'GZBlog',
  data() {
    return {
      posts: [],
      content: '',
      filterSearch: '',
      selected: null,
      theme: Theme
    };
  },
  methods: {
    async viewPostContent(id) {
      const _post = this.posts.find(v => v.id === id);

      const post = () => import(`raw-loader!@/assets/posts/${_post.file}.md`);

      const postContent = await post();
      this.content = {
        ..._post,
        content: marked(postContent.default)
      }

      this.selected = id;
    },
    getUUID() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    },
    getFiles() {
      this.posts = posts.map(v => {
        return {
          id: this.getUUID(),
          ...v
        }
      });

      this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    async loadTheme() {
      if (this.$theme && this.$theme !== 'default') {
        console.info("Loading %s theme.", this.$theme);
        const themeLoad = () => import(`@/themes/${this.$theme}/theme.json`);
        this.theme = await themeLoad();
      }
    },
  },
  computed: {
    filteredPosts() {
      if (this.filterSearch.length < 3) {
        return this.posts;
      }

      let search = this.filterSearch.toLowerCase();

      let posts = this.posts.filter(v => v.title.toLowerCase().includes(search)
          || v.description.toLowerCase().includes(search)
          || v.author.toLowerCase().includes(search));

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      return posts;
    }
  },
  beforeMount() {
    this.loadTheme();
  },
  created() {
    this.getFiles();
  }
}
</script>

<style scoped>
#gz-blog input.form-control, input.form-control:focus {
  background: transparent;
  color: v-bind(theme.blog.txt_searchFilter);
}

#gz-blog input.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: v-bind(theme.blog.txt_searchFilter);
  opacity: 1; /* Firefox */
}

#gz-blog input.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: v-bind(theme.blog.txt_searchFilter);
}

#gz-blog input.form-control::-ms-input-placeholder { /* Microsoft Edge */
  color: v-bind(theme.blog.txt_searchFilter);
}

#gz-blog {
  margin-top: -5%
}

#gz-blog .gz-post {
  color: v-bind(theme.blog.txt_postColor);
}

#gz-blog .gz-title {
  color: v-bind(theme.general.accent);
  font-size: 12px;
  font-weight: bold;
}

#gz-blog .gz-tags {
  width: fit-content;
}

#gz-blog .gz-desc, #gz-blog .gz-author, #gz-blog .gz-date {
  font-size: 10px;
  color: v-bind(theme.general.txt_important)
}

.gz-article-preview .gz-desc {
  overflow:hidden;
  max-height: 40px;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
}

.gz-articles .gz-article-preview {
  background: transparent;
  padding: 5px;
  margin: 5px 0;
  height: 110px;
  font-family: 'Noto Sans Mono', monospace;
}

#gz-blog .gz-post {
  margin-top: 10px;
  text-align: justify;
}

@media (max-width: 300px)  {
  .gz-articles .gz-article-preview {
    line-height: 10px;
    height: 70px;
  }

  .gz-author, .gz-date{
    display: none;
  }
}

@media (min-width: 301px) and (max-width: 595px) {
  .gz-articles .gz-article-preview {
    line-height: 15px;
  }

  .gz-title {
    font-size: 12px;
    font-weight: bold;
  }

  .gz-article-preview .gz-author, .gz-article-preview .gz-date {
    display: none;
  }

  .gz-article-preview .gz-desc {
    max-height: 55px;
  }
}

@media (min-width: 596px) and (max-width: 767px){
  .gz-articles .gz-article-preview {
    line-height: 15px;
  }

  .gz-article-preview .gz-title {
    font-size: 12px;
    font-weight: bold;
  }

  .gz-article-preview .gz-author, .gz-article-preview .gz-date {
    display: none;
  }

  .gz-article-preview .gz-desc {
    max-height: 80px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .gz-articles .gz-article-preview {
    line-height: 15px;
  }

  .gz-article-preview .gz-title {
    font-size: 12px;
    max-height: 30px;
  }

  .gz-article-preview .gz-author, .gz-article-preview .gz-date {
    display: none;
  }

  .gz-article-preview .gz-desc {
    max-height: 70px;
  }

}

</style>