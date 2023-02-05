<template>
  <div id="spi-contacts" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <div><p class="card-text" style="text-align: center">
              <a class="btn btn-dark spi-button" href="https://github.com/StefanoPisano" type="button">Git Hub</a><br>
              <a class="btn btn-dark spi-button" href="https://www.linkedin.com/in/stefano-pisano/" type="button">Linkedin</a><br>
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
  name: 'SPContact'
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
