<template>
  <div>
    <h1>Hi {{ me.firstName }}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <em v-if="all.loading">Loading users...</em>
    <span v-if="all.error" class="text-danger">ERROR: {{ all.error }}</span>
    <ul v-if="all.users">
      <li v-for="u in all.users" :key="u.id">
        {{ u.firstName + ' ' + u.lastName }}
      </li>
    </ul>
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
