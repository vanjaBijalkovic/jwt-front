<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button @click="logout()" variant="dark">Submit</b-button>
  </div>
</template>

<script>
import { authService } from '../services/auth.service';
export default {
  methods: {
    logout() {
      authService.logout().then(() => {
        this.$router.push('/login');
      })
    }
  },
  created() {
    authService.getUsers().then(response => {
      console.log(response);
    })
  }
}
</script>
