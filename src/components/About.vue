<template>
  <div id="spi-about" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <h5 class="card-title spi-card-title-border"><span class="index-name">{{ sectionIndex }}</span> <span
                class="section-name">About me</span></h5>
            <div class="spi-card-content-img-right">
              <div><p class="card-text">I’m an italian software developer based in Milan. I strongly believe in good
                practices and team working.
                <br>I always try to write code easy to read and update.
                <br>In addition to coding, I am passionate about every music genre and in my free time I like being a
                self-taught guitar player. I also like photography and whenever I can, I go for a hike in the nature
                with
                my camera.</p>
                <ul class="skill-list">
                  <li>JAVA</li>
                  <li>SQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Vue JS</li>
                </ul>
              </div>
              <div>
                <img alt="..." class="img-fluid rounded-start" src="@/assets/img/avatar_00.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPAbout',
  props: {
    sectionIndex: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0 10px;
  padding: 0;
  margin: 20px 0 0;
  overflow: hidden;
  list-style: none;
  columns: 2 !important;
  font-family: 'Noto Sans Mono', monospace;
}

.skill-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
}

.skill-list li::before {
  content: "▹";
  color: #64ffda;
  position: absolute;
  left: 0;
}
</style>
