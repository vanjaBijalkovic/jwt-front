<template>
  <div class="home">
    <div class="container">
      <b-form @submit.stop.prevent="login()">
        <b-form-group
          label="Email Adress:"
          label-for="email"
          description="Email adress"
        >
          <b-form-input
            id="email"
            v-model="user.email"
            type="email"
            required
            placeholder="Enter email"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Password:"
          label-for="password"
          description="Password"
        >
          <b-form-input
            id="password"
            v-model="user.password"
            type="password"
            required
            placeholder="Enter password"
          >
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="dark">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {},
    };
  },
  components: {},
  methods: {
    login() {
      console.log(this.user)
    }
  }
};
</script>
