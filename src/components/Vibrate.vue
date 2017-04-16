<template>
    <div>
        <md-button class="md-raised md-primary" @click.native="onFastClick">FastClick</md-button>
        <md-button class="md-raised md-primary" @click.native="onDelay">300ms Delay</md-button>
        <md-button class="md-raised md-primary" @click.native="onVibration">Vibrate</md-button>

        <md-dialog-alert
                :md-content="alert.content"
                :md-ok-text="alert.ok"
                ref="fastclick">
        </md-dialog-alert>
        <md-dialog-alert
                :md-content="alert2.content"
                :md-ok-text="alert2.ok"
                ref="delay">
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
        },
        alert2: {
          content: '300ms Delay',
          ok: 'Ok'
        }
      }
    },
    methods: {
      onFastClick: function () {
        FastClick.attach(this.openDialog('fastclick'))
        console.log(FastClick.attach(document.body))
      },
      onDelay: function () {
        this.openDialog('delay')
      },
      onVibration: function () {
        navigator.vibrate(3000)
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