<template lang="html">
  <div class="container">
  <div class="row main">
    <div class="main-login main-center">
      <form class="form-horizontal" @submit.prevent="submitSignup">

        <div class="form-group">
          <label for="name" class="cols-sm-2 control-label">Your Name</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
              <input type="text" v-model="dataUser.name"  placeholder="Enter your Name"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="cols-sm-2 control-label">Your Email</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
              <input type="text" v-model="dataUser.email"  placeholder="Enter your Email"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="username" class="cols-sm-2 control-label">Username</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
              <input type="text" v-model="dataUser.username"  placeholder="Enter your Username"/>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="cols-sm-2 control-label">Password</label>
          <div class="cols-sm-10">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
              <input type="password" v-model="dataUser.password"  placeholder="Enter your Password"/>
            </div>
          </div>
        </div>

        <div class="form-group ">
          <button type="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Signup',
  data () {
    return {
      dataUser: {
        name: '',
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['signUp']),
    submitSignup () {
      this.signUp(this.dataUser)
    }
  }
}
</script>

<style lang="css">
</style>
