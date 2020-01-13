<template>
  <div>
    <h1 class="title">Hi {{ me.firstName }}!</h1>
    <h2 class="subtitle">
      You're logged in with Vue + Vuex & JWT!!
    </h2>
    <nav class="panel">
      <p class="panel-heading">
        User List
      </p>
      <div v-if="all.users">
        <p class="panel-block" v-for="u in all.users" :key="u.id">
          <span class="panel-icon">
            <i class="fa fa-user"></i>
          </span>
          {{ u.firstName + ' ' + u.lastName }}
        </p>
      </div>
      <p class="panel-block" v-if="all.loading">
        <span class="panel-icon">
          <i class="fa fa-info"></i>
        </span>
        Loading...
      </p>
      <p class="panel-block" v-if="all.error">
        <span class="panel-icon">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
        ERROR: {{ all.error }}
      </p>
    </nav>
    <p>
      <router-link to="/login">
        Logout
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    me() {
      return this.$store.state.auth.user;
    },
    all() {
      return this.$store.state.users;
    },
  },
  created() {
    this.$store.dispatch('users/getAllUsers');
  },
};
</script>
