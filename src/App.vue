<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Todos</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Todo Content</h3>
        </div>
      </md-toolbar>
      <div class="phone-viewport">
          <md-list class="md-dense">
            <md-list-item @click="toggleLeftSidenav">
              <md-icon>done_all</md-icon> <router-link to="/todos">Todos</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>https</md-icon> <router-link to="/tokens">Tokens</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>announcement</md-icon> <router-link to="/device-info">Device Info</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-icon>alarm_on</md-icon> <router-link to="/vibrate">Vibrate</router-link>
            </md-list-item>

            <md-list-item @click="toggleLeftSidenav">
              <md-avatar>
                <img src="https://placeimg.com/40/40/people/5" alt="People">
              </md-avatar>

              <span>Abbey Christansen</span>

              <md-button class="md-icon-button md-list-action">
                <md-icon class="md-primary">chat_bubble</md-icon>
              </md-button>
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
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
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
