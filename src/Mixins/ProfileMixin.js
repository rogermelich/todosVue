// Profile Mixin
import todosVue from '../todosVue'

export default {
  methods: {
    fetchUserProfile: function () {
      this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
        this.connecting = false
        this.id = response.data.id
        this.name = response.data.name
        this.email = response.data.email
        this.createdAt = response.data.created_at
        this.updatedAt = response.data.updated_at
      }, (response) => {
        this.connecting = false
        this.showConnectionError()
      })
    }
  },
  computed: {
    avatarHash: function () {
      return '52fb84f3e6d38e577b9bef8c412b01a7'
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchUserProfile()
    }, 2500)
  }
}
