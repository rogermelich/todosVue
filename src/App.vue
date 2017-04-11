<template>
    <div class="phone-viewport">
        <md-toolbar>
            <md-button class="md-icon-button" @click="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>

            <h2 class="md-title">Todos</h2>
        </md-toolbar>

        <md-sidenav class="main-sidebar md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
            <md-toolbar class="md-account-header">
                <md-list class="md-transparent">
                    <md-list-item class="md-list-text-container">
                        <md-avatar class="md-large">
                            <img :src="avatar" :alt="name">
                        </md-avatar>
                        <div class="md-list-text-container">
                            <span>{{ name }}</span>
                            <span>{{ email }}</span>
                        </div>
                    </md-list-item>
                </md-list>
            </md-toolbar>
            <div class="phone-viewport">
                <md-list class="md-dense">
                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>done_all</md-icon>
                        <router-link exact to="/todos">Todos</router-link>
                    </md-list-item>

                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>https</md-icon>
                        <router-link exact to="/tokens">Tokens</router-link>
                    </md-list-item>

                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>account_circle</md-icon>
                        <router-link exact to="/profile">Profile</router-link>
                    </md-list-item>

                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>perm_device_information</md-icon>
                        <router-link exact to="/device-info">Device Info</router-link>
                    </md-list-item>

                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>alarm_on</md-icon>
                        <router-link exact to="/vibrate">Vibrate</router-link>
                    </md-list-item>

                    <md-list-item @click="toggleLeftSidenav">
                        <md-icon>exit_to_app</md-icon>
                        <router-link exact to="/login">Login/Logout</router-link>
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
  import profileMixin from './Mixins/ProfileMixin'
  export default {
    mixins: [profileMixin],
    data () {
      return {
        avatar: 'https://s.gravatar.com/avatar/52fb84f3e6d38e577b9bef8c412b01a7?s=80',
        name: null,
        email: null
      }
    },
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
