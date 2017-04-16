<template>
    <div>
        <md-button class="md-raised md-primary" @click.native="onDeviceReady">300ms delay</md-button>
        <md-button class="md-raised md-primary" @click.native="onVibration">Vibrate</md-button>

        <md-dialog-alert
                :md-content="alert.content"
                :md-ok-text="alert.ok"
                ref="fastclick">
        </md-dialog-alert>
    </div>
</template>
<script>
  import FastClick from 'fastclick'
  export default {
    data () {
      return {
        alert: {
          content: 'Activated FastClick',
          ok: 'Ok'
        }
      }
    },
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
      this.$material.setCurrentTheme('test')
    },
    beforeDestroy () {
      document.removeEventListener('deviceready', this.onBeforeDestroy, false)
    },
    methods: {
      onDeviceReady: function () {
        FastClick.attach(document.body)
        this.openDialog('fastclick')
      },
      onVibration: function () {
        navigator.vibrate([1000, 1000, 1000, 1000, 1000, 500, 1000, 500])
      },
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      },
      onBeforeDestroy () {
        console.log('Device onBeforeDestroy!')
      }
    }
  }
</script>