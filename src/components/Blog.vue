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
              <div class="spi-experience-values">
                <div class="spi-experience-values">
                  <div class="spi-post" v-html="content"></div>
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

export default {
  name: 'SPBlog',
  data() {
    return {
      posts: [],
      content: '',
      filterSearch: '',
      selected: null
    };
  },
  methods: {
    async viewPostContent(id) {
      this.$isLoading(true);

      const _post = this.posts.find(v => v.id === id);

      const post = () => import(`@/assets/posts/${_post.file}.md`);

      const postContent = await post();
      this.content = marked(postContent.default)

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
    }
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
  created() {
    this.getFiles();
    this.viewPostContent(this.posts[0].id);
  }
}
</script>

<style>
input.form-control, input.form-control:focus {
  background: transparent;
  color: #ccd6f6;
}

input.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ccd6f6;
  opacity: 1; /* Firefox */
}

input.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #ccd6f6;
}

input.form-control::-ms-input-placeholder { /* Microsoft Edge */
  color: #ccd6f6;
}

#spi-blog {
  margin-top: -5%
}

.spi-post {
  color: #ccd6f6;
}

meta-info {
  display: none;
}

.meta-title {
  color: #64ffda;
  font-size: 12px;
  font-weight: bold;
}

.meta-desc, .meta-author, .meta-date {
  font-size: 10px;
}

.list-group li {
  background: transparent;
  border-color: #64ffda;
  font-family: 'Noto Sans Mono', monospace;
  color: #ccd6f6
}

.list-group li.active {
  background: #64ffda;
  color: #0a192f;
  border-color: #64ffda;
}

.list-group li.active .meta-title {
  color: #0a192f;
}

.spi-experience-values {
  text-align: justify;
}

@media (max-width: 1024px) {
  .meta-title {
    color: #64ffda;
    font-size: 12px;
    font-weight: bold;
  }

  .meta-desc, .meta-author, .meta-date {
    display: none
  }

}
</style>