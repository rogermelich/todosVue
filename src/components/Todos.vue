<template>
    <vue-pull-refresh :on-refresh="onRefresh" :config="PulltoRefreshConfig">
        <div>
            <div align="center">
                <md-spinner :md-size="300" md-indeterminate v-show="connecting"></md-spinner>
            </div>
            <md-table-card>
                <md-toolbar>
                    <h1 class="md-title">Todos</h1>
                    <md-button class="md-icon-button">
                        <md-icon>filter_list</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>search</md-icon>
                    </md-button>
                </md-toolbar>

                <md-table md-sort="name" md-sort-type="desc">
                    <md-table-header>
                        <md-table-row>
                            <md-table-head md-sort-by="name" md-tooltip="Task name">Name</md-table-head>
                            <md-table-head md-sort-by="priority" md-tooltip="The priority for task">Priority
                            </md-table-head>
                            <md-table-head md-sort-by="done" md-tooltip="Task is done?">Done</md-table-head>
                        </md-table-row>
                    </md-table-header>

                    <md-table-body>
                        <md-table-row v-for="(todo, index) in todos" md-auto-select md-selection>
                            <md-table-cell>{{ index + 1 }} {{ todo.name }}</md-table-cell>
                            <md-table-cell>{{ todo.priority }}</md-table-cell>
                            <md-table-cell>
                                <md-switch v-model="todo.done" id="done" name="done"></md-switch>
                            </md-table-cell>
                        </md-table-row>
                    </md-table-body>

                </md-table>

                <md-table-pagination
                        :md-size=perPage
                        :md-total=total
                        :md-page=page
                        md-label="Rows"
                        md-separator="of"
                        :md-page-options="[15, 25, 50]"
                        @pagination="onPagination"></md-table-pagination>

            </md-table-card>

            <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
                <span>Connection error. Please check the connection</span>
            </md-snackbar>

        </div>
    </vue-pull-refresh>
</template>
<style>
</style>
<script>
  import todosVue from '../todosVue'
  import VuePullRefresh from 'vue-pull-refresh'
  export default{
    components: {
      'vue-pull-refresh': VuePullRefresh
    },
    data () {
      return {
        todos: [],
        connecting: true,
        perPage: 15,
        page: 1,
        total: Number,
        PulltoRefreshConfig: {
          errorLabel: 'Error Try again',
          startLabel: 'Swipe to refresh',
          readyLabel: 'Swipe to refresh',
          loadingLabel: 'Reloading Components'
        }
      }
    },
    created () {
      var that = this
      setTimeout(function () {
        that.fetchData()
      }, 2500)
      this.$material.setCurrentTheme('todostokens')
    },
    methods: {
      fetchData: function () {
        return this.fetchPage(1)
      },
      fetchPage: function (page) {
        this.$http.get(todosVue.API_TASK_URL + '?page=' + page).then((response) => {
          this.connecting = false
          this.todos = response.data.data
          this.perPage = response.data.per_page
          this.page = response.data.current_page
          this.total = response.data.total
        }, (response) => {
          this.connecting = false
          this.showConnectionError()
          this.authorized = false
        })
      },
      showConnectionError () {
        this.$refs.connectionError.open()
      },
      onPagination (page) {
        console.log(page.page)
        this.fetchPage(page.page)
      },
      onRefresh: function (page) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve()
          }, 1000)
        }).then(() => {
          this.fetchPage(page.page)
        })
      }
    }
  }
</script>