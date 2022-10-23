<template>
  <div id="spi-header" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Stefano Pisano.</h1>
          <h1 class="card-title card-title-2">I code things.</h1>
          <p class="card-text">A passionate developer. Currently I am also a Team Lead at <a class="link-info spi-link"
                                                                                             href="https://www.techgap.it/">Tech
            Gap Italia</a>
            <br>I strongly believe in team working and writing clean code.</p>
          <button class="btn btn-dark spi-button" type="button">Download CV</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPHeader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#spi-header {
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
}

.card {
  background: transparent;
}

.card-title {
  color: #ccd6f6;
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
}

.card-title-2 {
  color: #8892b0;
}
</style>
