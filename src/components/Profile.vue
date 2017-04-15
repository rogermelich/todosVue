<template>
    <vue-pull-refresh :on-refresh="onRefresh" :config="PulltoRefreshConfig">
        <div>
            <div align="center">
                <md-spinner :md-size="300" md-indeterminate v-show="connecting"></md-spinner>
            </div>
            <md-card md-with-hover>
                <md-card-header>
                    <md-avatar>
                        <img :src="avatar" :alt="name">
                    </md-avatar>

                    <div class="md-title">{{ id }} {{ name }}</div>
                    <div class="md-subhead">{{ email }}</div>
                </md-card-header>

                <md-card-content>
                    <form novalidate @submit.stop.prevent="submit">
                        <md-input-container>
                            <md-icon>person</md-icon>
                            <label>Name</label>
                            <md-input v-model="name" placeholder="Put your name here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>email</md-icon>
                            <label>Email</label>
                            <md-input v-model="email" placeholder="Put your email here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>date_range</md-icon>
                            <label>Created at</label>
                            <md-input v-model="createdAt" placeholder="Date here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>date_range</md-icon>
                            <label>Updated at</label>
                            <md-input v-model="updatedAt" placeholder="Date here"></md-input>
                        </md-input-container>
                    </form>
                    <md-button href="/tokens" class="md-raised md-primary">Show Token</md-button>
                </md-card-content>

                <md-card-actions>
                    <md-button>Edit</md-button>
                    <md-button>Delete</md-button>
                </md-card-actions>
                <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
                    <span>Connection error. Please reconnect using connect button!.</span>
                </md-snackbar>
            </md-card>
        </div>
    </vue-pull-refresh>
</template>
<style>
</style>
<script>
  import profileMixin from '../Mixins/ProfileMixin'
  export default{
    mixins: [profileMixin],
    data () {
      return {
        avatar: '',
        id: null,
        name: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        connecting: true
      }
    },
    created () {
      this.$material.setCurrentTheme('profile')
    }
  }
</script>