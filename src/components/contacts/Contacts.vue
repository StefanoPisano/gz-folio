<template>
  <div id="spi-contacts" class="row">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body">
            <p class="card-text" style="text-align: center">
              <template v-for="(contact, i) in contacts" v-bind:key="i">
                <a :href="contact.link" class="btn btn-dark spi-button" type="button" v-text="contact.label"/><br/>
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "./contacts.json";

export default {
  name: 'SPContacts',
  data() {
    return {
      contacts: Contacts
    }
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
