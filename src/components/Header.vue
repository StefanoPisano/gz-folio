<template>
  <div id="spi-header" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body">
          <h6 class="greetings">Hi! :)</h6>
          <h1 class="card-title">Stefano Pisano.</h1>
          <h1 class="card-title card-title-2">I code things.</h1>
          <p class="card-text">A passionate developer and Team Lead at <a class="link-info spi-link"
                                                                          href="https://www.techgap.it/">Tech
            Gap Italia</a>
            <br>I strongly believe in team working and producing clean and maintainable code.</p>
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
  padding: 0;
}

.greetings {
  font-family: 'Noto Sans Mono', monospace;
  color: #64ffda;
}

.card {
  background: transparent;
  border: none
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
