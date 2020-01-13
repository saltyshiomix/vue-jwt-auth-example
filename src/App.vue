<template>
  <section class="hero is-default is-fullheight">
    <div class="hero-body">
      <div class="container">
        <article class="message is-danger" v-if="alert.message">
          <div class="message-body">
            {{ alert.message }}
          </div>
        </article>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'App',
  computed: {
    alert() {
      return this.$store.state.alert;
    },
  },
  watch: {
    $route(/* to, from */) {
      this.$store.dispatch('alert/clear');
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 480px;
}
</style>
