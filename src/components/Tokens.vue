<template>
    <div>
        <div>{{ msg }}  </div>
    </div>
</template>
<style>

</style>
<script>
import auth from '../services/auth'
export default {
  data () {
    return {
      msg: auth.getToken()
    }
  },
  created () {
    this.$material.setCurrentTheme('todostokens')
  }
}
</script>