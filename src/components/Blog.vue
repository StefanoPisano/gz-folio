<template>
  <div class="row" style="clear: both">
    <div class="col-md-8 offset-md-2">

    </div>
  </div>
  <div id="spi-blog" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div class="card-text spi-card-content-img-left">
              <ul class="list-group">
                <input v-model="filterSearch" class="form-control" placeholder="Search..." type="text">
                <li v-for="(post, index) in filteredPosts" v-bind:key="index"
                    :class="selected === index ? 'list-group-item active' : 'list-group-item'"
                    @click="markdownToHtml(index, post.post)">

                  <div class="meta-title" v-html="post.title"/>
                  <div class="meta-desc" v-html="post.description"/>
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
import readMe from '@/assets/posts/README.md'
import db from '@/assets/posts/db.md'
import bps from '@/assets/posts/bps.md'

export default {
  name: 'SPBlog',
  data() {
    return {
      contents: [db, bps, readMe],
      content: '',
      filterSearch: '',
      selected: null
    };
  },
  methods: {
    markdownToHtml(index, post) {
      this.content = marked(post);
      this.selected = index;
    },
    mdToObject(post) {
      return {
        title: this.getTitle(post),
        description: this.getDescription(post),
        author: this.getAuthor(post),
        date: this.getDate(post),
        post: post
      }
    },
    getTitle(post) {
      let metaStart = post.indexOf("<meta-title>") + 12;
      let metaEnd = post.indexOf("</meta-title>");

      return `${post.substring(metaStart, metaEnd)}`;
    },
    getAuthor(post) {
      let metaStart = post.indexOf("<meta-author>") + 13;
      let metaEnd = post.indexOf("</meta-author>");

      return `${post.substring(metaStart, metaEnd)}`;
    },
    getDescription(post) {
      let metaStart = post.indexOf("<meta-desc>") + 11;
      let metaEnd = post.indexOf("</meta-desc>");

      return `${post.substring(metaStart, metaEnd - metaStart > 100 ? metaStart + 100 : metaEnd)}${metaEnd - metaStart > 100 ? '...' : ''}`;
    },
    getDate(post) {
      let metaStart = post.indexOf("<meta-date>") + 11;
      let metaEnd = post.indexOf("</meta-date>");

      return `${post.substring(metaStart, metaEnd)}`;
    }
  },
  computed: {
    filteredPosts: function () {
      if (this.filterSearch.length < 3) {
        return this.contents;
      }

      let search = this.filterSearch.toLowerCase();

      let posts = this.contents.filter(v => v.title.toLowerCase().includes(search)
          || v.description.toLowerCase().includes(search)
          || v.author.toLowerCase().includes(search));

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      return posts;
    }
  },
  created() {
    this.contents = this.contents.map(v => this.mdToObject(v));

    this.contents.sort((a, b) => new Date(b.date) - new Date(a.date));

    this.markdownToHtml(0, this.contents[0].post);
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