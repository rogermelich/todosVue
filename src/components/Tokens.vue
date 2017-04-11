<template>
    <!--<div>-->
        <!--<div><span class="md-headline">{{ msg }}</span></div>-->
    <!--</div>-->
    <md-card md-with-hover>
        <md-card-content>
            <md-spinner :md-size="150" md-indeterminate  class="md-accent" v-show="connecting" ></md-spinner>
                <md-input-container>
                    <md-icon>person</md-icon>
                    <label>Name</label>
                    <md-input v-model="name" placeholder="Your Name" disabled></md-input>
                </md-input-container>

                <md-input-container>
                    <md-icon>mail</md-icon>
                    <label>Email</label>
                    <md-input v-model="email" placeholder="Your Email" disabled></md-input>
                </md-input-container>

                <md-input-container>
                    <md-icon>lock</md-icon>
                    <label>Your Token</label>
                    <md-textarea v-model="token" placeholder="Your Token" disabled></md-textarea>
                </md-input-container>

            <router-link tag="md-button" to="./Profile" class="md-raised md-primary">Return To Profile</router-link>
        </md-card-content>
    </md-card>
</template>
<style>
    .md-input-container textarea {
        min-height: 300px;
    }
</style>
<script>
import profileMixin from '../Mixins/ProfileMixin'
import auth from '../services/auth'
export default {
  mixins: [profileMixin],
  data () {
    return {
      name: null,
      email: null,
      connecting: true,
      token: auth.getToken()
    }
  },
  created () {
    this.$material.setCurrentTheme('todostokens')
  }
}
</script>