<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Todos</h2>
    </md-toolbar>

    <md-sidenav class="main-sidebar md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Todo Content</h3>
        </div>
      </md-toolbar>
      <div class="phone-viewport">
          <md-list class="md-dense">
            <md-list-item @click="toggleLeftSidenav">
              <md-icon>done_all</md-icon> <router-link exact to="/todos">Todos</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>https</md-icon> <router-link exact to="/tokens">Tokens</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>account_circle</md-icon> <router-link exact to="/profile">Profile</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>perm_device_information</md-icon> <router-link exact to="/device-info">Device Info</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>alarm_on</md-icon> <router-link exact to="/vibrate">Vibrate</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>exit_to_app</md-icon> <router-link exact to="/login">Login/Logout</router-link>
            </md-list-item>
          </md-list>
        </div>
    </md-sidenav>
    <router-view>
      <!--Per veure msg-->
    </router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style>
a {
  color: inherit;
  text-decoration: none;
}
</style>
