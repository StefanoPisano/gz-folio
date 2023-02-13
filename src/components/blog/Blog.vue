<template>
  <div id="spi-blog" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div class="card-text spi-card-content-img-left">
              <ul class="list-group">
                <input v-model="filterSearch" class="form-control" placeholder="Search..." type="text"/>
                <li v-for="post in filteredPosts" v-bind:key="post.id"
                    :class="selected === post.id ? 'list-group-item active' : 'list-group-item'"
                    @click="viewPostContent(post.id)">

                  <div class="meta-title" v-html="shorten(post.title, 50)"/>
                  <div class="meta-desc" v-html="shorten(post.description, 100)"/>
                  <div class="meta-author"><strong>Author:</strong> {{ post.author }}</div>
                  <div class="meta-date"><strong>Date:</strong> {{ post.date }}</div>

                </li>
              </ul>
              <div class="blog-post-container">
                <div class="blog-post">
                  <h2 v-text="content.title"/>
                  <hr/>
                  <div class="spi-post" v-html="content.content"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {marked} from 'marked';
import posts from '@/assets/posts/posts.json';
import Theme from "@/themes/default/theme.json";


export default {
  name: 'SPBlog',
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
      this.$isLoading(true);

      const _post = this.posts.find(v => v.id === id);

      const post = () => import(`raw-loader!@/assets/posts/${_post.file}.md`);

      const postContent = await post();
      this.content = {
        title: _post.title,
        content: marked(postContent.default)
      }

      this.selected = id;

      this.$isLoading(false);
    },
    getUUID() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    },
    getFiles() {
      this.$isLoading(true);

      this.posts = posts.map(v => {
        return {
          id: this.getUUID(),
          ...v
        }
      });

      this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      this.$isLoading(false);
    },
    shorten(text, length) {
      if (!text) {
        return '';
      } else if (text.length > length) {
        return text.substring(0, length) + '...'
      } else {
        return text;
      }
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
    this.viewPostContent(this.posts[0].id);
  }
}
</script>

<style>
input.form-control, input.form-control:focus {
  background: transparent;
  color: v-bind(theme.blog.txt_searchFilter);
}

input.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: v-bind(theme.blog.txt_searchFilter);
  opacity: 1; /* Firefox */
}

input.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: v-bind(theme.blog.txt_searchFilter);
}

input.form-control::-ms-input-placeholder { /* Microsoft Edge */
  color: v-bind(theme.blog.txt_searchFilter);
}

#spi-blog {
  margin-top: -5%
}

.spi-post {
  color: v-bind(theme.blog.txt_postColor);
}

meta-info {
  display: none;
}

.meta-title {
  color: v-bind(theme.blog.txt_postBoxTitle);
  font-size: 12px;
  font-weight: bold;
}

.meta-desc, .meta-author, .meta-date {
  font-size: 10px;
  color: v-bind(theme.blog.txt_postBoxDesc)
}

.list-group li {
  background: transparent;
  border-color: v-bind(theme.blog.postBoxBorder);
  font-family: 'Noto Sans Mono', monospace;
}

.list-group li.active {
  background: v-bind(theme.blog.bg_postBoxSelected);
  border-color: v-bind(theme.blog.postBoxBorderSelected);
}

.list-group li.active .meta-title {
  color: v-bind(theme.blog.txt_postBoxTitleSelected);
}

.list-group li.active .meta-author, .list-group li.active .meta-desc, .list-group li.active .meta-date {
  color: v-bind(theme.blog.txt_postBoxDescSelected);
}

.list-group li.active .meta-title {
  color: v-bind(theme.blog.txt_postBoxTitleSelected);
}

.blog-post {
  text-align: justify;
}

@media (max-width: 1024px) {
  .meta-title {
    font-size: 12px;
    font-weight: bold;
  }

  .meta-desc, .meta-author, .meta-date {
    display: none
  }

}
</style>