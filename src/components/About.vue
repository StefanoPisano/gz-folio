<template>
  <div id="spi-about" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div class="spi-card-content-img-right">
              <div>
                <div class="card-text">
                  <p><span class="colored-text">Hello!</span> My name is Stefano and I am an italian software developer
                    based in Milan.
                    I strongly believe in good practices and team working.
                    My career in software development <span class="colored-text">started back in 2016</span> but my love
                    for this world was there since I was a kid
                    when I was playing with CSS, HTML in order to create some custom themes for a forum.</p>
                  <p>While writing code I always try to apply some magic tricks which will transform <span
                      class="disabled-text">bad</span> code into <span class="colored-text">clean</span> code.
                    <br/>I also have some experience in leading a small team for an international project.
                  </p>
                  <p>My life is not entirely related to coding, I am passionate about every music genre and in my free
                    time I like being a
                    self-taught guitar player.
                    <br/>I also like photography and whenever I can, I go for a hike in the nature with my camera.
                  </p></div>
                <ul class="spi-list">
                  <li>Coding</li>
                  <li>Cinema</li>
                  <li>Music</li>
                  <li>Photography</li>
                  <li>Environment</li>
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
export default {
  name: 'SPAbout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
