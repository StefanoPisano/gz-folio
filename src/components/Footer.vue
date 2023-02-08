<template>
  <div id="spi-footer" class="row position-absolute bottom-0 w-100 pb-3">
    <div class="col-md-8 offset-md-2">
      <footer>Coded with <span style="color:red">&hearts;</span> by <a href="https://github.com/StefanoPisano">Stefano
        Pisano</a></footer>
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

  text-align: center;
  font-family: 'Noto Sans Mono', monospace;
  font-size: .8em;
}

@media (max-width: 1024px) {
  #spi-footer {
    position: relative;
  }
}
</style>
