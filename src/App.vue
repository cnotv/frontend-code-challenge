<template>
  <main
    id="app"
    class="c-container"
  >
    <section class="c-grid">
      <Card
        v-for="ad in limit(getAds, 10)"
        v-bind:ad="ad"
        v-bind:key="ad.id"
      />
    </section>
  </main>
</template>

<script>
import store from '@/store'
import Vue from 'vue'
import Vuex, { mapGetters } from 'vuex'
import Card from './components/Card'

Vue.use(Vuex)

export default {
  name: 'App',
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'getAds'
    ])
  },
  methods: {
    limit: (array, amount) => {
      return array.slice(0, amount)
    }
  },
  mounted () {
    // display post default
    this.$store.dispatch('commitAds')
  },
  store
}
</script>

<style lang="scss" src="./assets/styles/main.scss">
  // theoretically we should load the CSS from a UI library and update the value (in our case Materialize, Vuetify, etc)
</style>
