<template>
  <section id="contacts" class="row gz-box">
    <div class="col-md-8 offset-md-2">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="card-body" style="text-align: center">
            <h2 class="gz-title-section">Get in Touch!</h2>
            <p class="card-text" >
              <template v-for="(contact, i) in contacts" v-bind:key="i">
                <a :href="contact.link" class="btn btn-dark gz-button" type="button" v-text="contact.label"/>
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Contacts from "./contacts.json";

export default {
  name: 'GZContacts',
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
