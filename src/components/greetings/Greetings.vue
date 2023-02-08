<template>
  <div id="spi-header" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card">
        <div class="card-body typewriter">
          <h6 class="greetings" v-text="greetings.greeting"/>
          <h1 class="card-title dev-name" v-text="greetings.title"/>
          <h1 class="card-title card-title-2" v-text="greetings.subTitle"/>
          <p class="card-text" v-html="greetings.caption"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Greetings from "./greetings.json";

export default {
  name: 'SPGreetings',
  data() {
    return {
      greetings: Greetings
    }
  }
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
