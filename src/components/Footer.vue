<template>
  <div id="spi-footer" class="row">
    <div class="col-md-8 offset-md-2">
      <footer>Coded by Stefano Pisano</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SPFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#spi-footer {
  position: absolute;
  bottom: 0;
  text-align: center;
  margin: 0 0 20px 0;
  font-family: 'Noto Sans Mono', monospace;
  font-size: .8em;
  width: 99%;
}

@media (max-width: 1024px) {
  #spi-footer {
    position: relative;
  }
}
</style>
