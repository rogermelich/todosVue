<template>
    <div>
        <md-button class="md-raised md-primary" @click.native="onDelay">300ms Delay</md-button>
        <md-button class="md-raised md-primary" @click.native="onVibration">Vibrate</md-button>

        <md-dialog-alert
                :md-content="alert.content"
                :md-ok-text="alert.ok"
                ref="dialog">
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
    methods: {
      onDelay: function () {
        FastClick.attach(document.body)
        this.openDialog('dialog')
        console.log(FastClick.attach(document.body))
      },
      onVibration: function () {
        navigator.vibrate(3000)
        console.log(navigator.vibrate(3000))
      },
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      }
    }
  }
</script>