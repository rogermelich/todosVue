<template>
    <div>
        <div v-show="!authorized">
            <md-button class="md-raised md-primary" @click="login">Login</md-button>
        </div>
        <div v-show="authorized">
            <md-button class="md-raised md-primary" @click="logout">Logout</md-button>
        </div>
        <md-table-card>
            <md-toolbar>
                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
            </md-toolbar>

            <md-table md-sort="name" md-sort-type="desc">
                <md-table-header>
                    <md-table-row>
                        <md-table-head md-sort-by="name">Name</md-table-head>
                        <md-table-head md-sort-by="calories" md-numeric
                                       md-tooltip="The total amount of food energy and the given serving size">Priority
                        </md-table-head>
                        <md-table-head md-sort-by="fat" md-numeric>Done</md-table-head>
                    </md-table-row>
                </md-table-header>

                <md-spinner :md-size="150" md-indeterminate class="md-accent" v-show="connecting"></md-spinner>

                <md-table-body>
                    <md-table-row v-for="(todo, index) in todos" md-auto-select md-selection>
                        <md-table-cell>{{ index +1 }} {{ todo.name }}</md-table-cell>
                        <md-table-cell>{{ todo.priority }}</md-table-cell>
                        <md-table-cell>{{ todo.done }}</md-table-cell>
                    </md-table-row>
                </md-table-body>

            </md-table>

            <md-table-pagination
                    :md-size=perPage
                    :md-total=total
                    :md-page=page
                    md-label="Rows"
                    md-separator="of"
                    :md-page-options="[5, 15, 25, 50]"
                    @pagination="onPagination"></md-table-pagination>

        </md-table-card>

        <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
            <span>Connection error. Please reconnect using connect button!.</span>
        </md-snackbar>

        <md-dialog-confirm
                md-title="Logout"
                md-content="Are you sure you want to logout?"
                md-ok-text="Ok"
                md-cancel-text="Cancel"
                @close="onCloseSureToLogout"
                ref="sureToLogout">
        </md-dialog-confirm>
    </div>
</template>
<style>

</style>
<script>
var STORAGE_KEY = 'todosvue_token'
var AUTH_CLIENT_ID = 4
var AUTH_REDIRECT_URI = 'http://localhost:8095/todos'
var API_URL = 'http://todos.dev:8080/api/v1/task'
var OAUTH_SERVER_URL = 'http://todos.dev:8080/oauth/authorize?'

export default{
  data () {
    return {
      todos: [],
      authorized: false,
      token: null,
      connecting: false,
      total: 0,
      perPage: 0,
      page: 0
    }
  },
  created () {
    if (document.location.hash) var token = this.extractToken(document.location.hash)
    if (token) this.saveToken(token)
    if (!this.token == null) this.token = this.fetchToken()
    if (this.fetchToken()) {
      this.authorized = true
    } else {
      this.authorized = false
    }
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      var token = this.fetchToken()
      console.log('TOKEN: ' + token)
      if (token != null) {
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
        console.log('HEY TOKEN: ' + token)
      }
      this.$http.get('http://todos.dev:8080/api/v1/task?page=' + page).then((response) => {
        console.log(response.data)
        this.todos = response.data.data
      }, (response) => {
        console.log(response.data)
      })
    },
    extractToken: function (hash) {
      return hash.match(/#(?:access_token)=([\S\s]*?)&/)[1]
        return !!match && match[1]		 +    },
      showConnectionError () {
        this.$refs.connectionError.open()
      },
      initLogout: function () {
        this.openDialog('sureToLogout')
    },
    logout: function () {
      window.localStorage.removeItem(STORAGE_KEY)
      this.authorized = false
    },
    login: function () {
      query = {
        client_id: AUTH_CLIENT_ID,
        redirect_uri: AUTH_REDIRECT_URI,
        response_type: 'token',
        scope: ''
      }
      var query = window.querystring.stringify(query)
      window.location.replace('http://todos.dev:8080/oauth/authorize?' + query)
    },
    fetchToken: function () {
      return window.localStorage.getItem(STORAGE_KEY)
    },
    saveToken: function (token) {
      window.localStorage.setItem(STORAGE_KEY, token)
    },
    onPagination: function () {
      console.log('pagination todo!')
    }
  }
}
</script>

