<template lang="html">
  <div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title">Sign In</h1>
            <br><br><br>
            <div class="account-wall">
                <form class="form-signin">
                <input type="text" class="form-control" placeholder="Email" required autofocus>
                <br>
                <input type="password" class="form-control" placeholder="Password" required>
                <br>
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me">
                    Remember me
                </label>
                <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
            </div>
            <a href="#" class="text-center new-account">Create an account </a>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    getSignIn: function () {
      axios.post('http://localhost:3000/api/users/signin', {
        username: this.username,
        password: this.password
      })
      .then(function (response) {
        if (response.data.hasOwnProperty('message')) {
          alert('username or password wrong')
        } else {
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('username', response.data.username)
          window.localStorage.setItem('role', response.data.role)
          this.$router.push('/')
          location.reload()
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
