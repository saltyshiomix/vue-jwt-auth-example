<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="title">Login</h1>
    <div class="field">
      <label class="label">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="username"
          type="text"
          name="username"
          class="input"
          :class="{ 'is-danger': submitted && !username }"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right" v-show="submitted && !username">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger" v-show="submitted && !username">
        Username is required
      </p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          v-model="password"
          type="password"
          name="password"
          class="input"
          :class="{ 'is-danger': submitted && !password }"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
        <span class="icon is-small is-right" v-show="submitted && !password">
          <i class="fa fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger" v-show="submitted && !password">
        Password is required
      </p>
    </div>
    <br />
    <div class="field">
      <div class="control">
        <button class="button is-link">
          Login
        </button>
      </div>
      <img
        v-show="loggingIn"
        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
      />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: 'user1',
      password: 'Pass1',
      submitted: false,
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.auth.loggingIn;
    },
  },
  created() {
    this.$store.dispatch('auth/logout');
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.$store.dispatch('auth/login', { username, password });
      }
    },
  },
};
</script>
