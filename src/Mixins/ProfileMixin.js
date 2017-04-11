// Profile Mixin
import todosVue from '../todosVue'
import gravatar from 'gravatar'

export default {
  methods: {
    avatarUrl: function () {
      return gravatar.url(this.email)
    },
    fetchUserProfile: function () {
      this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
        this.connecting = false
        this.id = response.data.id
        this.name = response.data.name
        this.email = response.data.email
        this.createdAt = response.data.created_at
        this.updatedAt = response.data.updated_at
        this.avatar = this.avatarUrl()
      }, (response) => {
        this.connecting = false
        this.showConnectionError()
      })
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchUserProfile()
    }, 2500)
  }
}
