<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link class="nav-link" to="/" @click="visible = false">
        <img alt="" class="d-inline-block align-text-top" height="30" src="../assets/img/avlogo.png" width="30">
      </router-link>
      <button aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"
              data-target="#navbarNav" data-toggle="collapse" type="button"
              @click="visible=!visible">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navContent" :class="!visible?'collapse':'nav-opened'" class="navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/" @click="visible = false"><span
                class="spi-index">1.</span>Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about" @click="visible = false"><span class="spi-index">2.</span>About me
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/experience" @click="visible = false"><span class="spi-index">3.</span>Experience
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts" @click="visible = false"><span class="spi-index">4.</span>Contacts
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SPNavigation',
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
nav {
  margin-bottom: 500px;
  backdrop-filter: blur(90px);
}

.nav-opened {
  height: 100vh;
  font-size: 24px
}

</style>
