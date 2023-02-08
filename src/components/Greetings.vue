<template>
  <div id="spi-header" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body typewriter">
          <h6 class="greetings">Hi! :)</h6>
          <h1 class="card-title dev-name">Stefano Pisano.</h1>
          <h1 class="card-title card-title-2">I code things.</h1>
          <p class="card-text">A passionate developer and Team Leader at <a class="link-info spi-link"
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
  name: 'SPGreetings',
}
</script>

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
  border: none;
}

.card-title {
  color: #ccd6f6;
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
}

.card-title-2 {
  color: #8892b0;
  font-size: clamp(40px, 8vw, 40px) !important;
}

.card-text {
  font-size: 18px;
}

.typewriter .dev-name {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 3s steps(30, end) forwards;
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}
</style>
