<template>
  <div id="spi-about" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div class="spi-card-content-img-right">
              <div>
                <div class="card-text" v-html="data.about"/>
                <ul class="spi-list">
                  <li v-for="(passion, i) in data.passions" v-bind:key="i" v-text="passion"/>
                </ul>
              </div>
              <div class="img-wrapper">
                <div class="img-container">
                  <picture>
                    <img alt="..." class="img-fluid rounded-start" src="@/assets/img/avatar_00.jpg">
                  </picture>
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

import About from "./about.json";

export default {
  name: 'SPAbout',
  data() {
    return {
      data: About
    }
  }
}
</script>

<style>
.spi-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 250px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  columns: 2 !important;
  font-family: 'Noto Sans Mono', monospace;
  font-size: 16px;
  white-space: nowrap;
}

.spi-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.spi-list li::before {
  content: "▹";
  color: #64ffda;
  position: absolute;
  left: 0;
}

.colored-text {
  color: #64ffda;
}

.disabled-text {
  text-decoration: line-through;
}

.img-wrapper {
  height: fit-content;
  border-radius: 10px;
  background-color: #64ffda;
}

.img-wrapper:hover {
  background-color: transparent;
}

.img-container:hover {
  mix-blend-mode: normal;
}

.img-container {
  position: relative;
  filter: grayscale(100%) contrast(1);
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  mix-blend-mode: multiply;
}
</style>
