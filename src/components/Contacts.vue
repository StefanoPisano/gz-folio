<template>
  <div id="spi-contacts" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <h5 class="card-title spi-card-title-border"><span class="index-name">{{ sectionIndex }}</span> <span
                class="section-name">Get in touch</span></h5>
            <div><p class="card-text" style="text-align: center">
              <a class="btn btn-dark spi-button" href="#" style="pointer-events: none; opacity: .5"
                 type="button">Blog</a><br>
              <a class="btn btn-dark spi-button" href="https://github.com/StefanoPisano" type="button">Git Hub</a><br>
              <a class="btn btn-dark spi-button" href="https://www.linkedin.com/in/stefano-pisano/" type="button">Linkedin</a><br>
              <a class="btn btn-dark spi-button" href="https://www.instagram.com/im.stee/"
                 type="button">Instagram</a><br>
              <a class="btn btn-dark spi-button" href="mailto:spisano@protonmail.com" type="button">Contact me!</a>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPContact',
  props: {
    sectionIndex: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-text a {
  width: 145px;
}

@media (max-width: 900px) {
  .card-text a {
    width: 80%;
  }
}
</style>
