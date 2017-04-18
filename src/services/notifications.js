/* globals localStorage */

import todosVue from '../todosVue'
import app from '../App.vue'
import router from './router'

export default {
  get () {
    return {
      notifications: this.fetch()
    }
  },
  fetch: function () {
    window.axios.get(todosVue.GET_MESSAGES_URL).then((response) => {
      console.log(response.data)
      return response.data
    }, (error) => {
      console.log('error: ' + error)
    })
  },
  enable () {
    this.init()
    this.register()
    // this.subscribe('all')
    this.process()
  },
  init () {
    app.push = window.PushNotification.init({
      'android': {
        'senderID': todosVue.ANDROID_SENDER_ID
      },
      'ios': {
        'sound': true,
        'vibration': true,
        'badge': true
      },
      'windows': {}
    })
  },
  register () {
    app.push.on('registration', function (data) {
      console.log('registration event: ' + data.registrationId)
      var oldRegId = localStorage.getItem('registrationId')
      if (oldRegId !== data.registrationId) {
        // Save new registration ID
        localStorage.setItem('registrationId', data.registrationId)
        // Post registrationId to your app server as the value has changed
      }
    })
  },
  subscribe (topic) {
    app.push.subscribe('/topics/' + topic, function () {
      console.log('Success registration to all topic')
    }, function (e) {
      console.log('error registrating to all topic:')
      console.log(e)
    })
  },
  process () {
    app.push.on('error', function (e) {
      console.log('push error = ' + e.message)
    })
    let notifications = this
    app.push.on('notification', function (data) {
      console.log('Notification event received!')
      console.log('Title: ' + data.title)
      console.log('Message: ' + data.message)
      console.log('Foreground: ' + data.additionalData.foreground)

      router.push({
        path: '/notifications',
        params: {
          notifications: notifications.fetch()
        }
      })
    })
  }
}
