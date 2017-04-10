/**
 * Created by roger on 27/01/17.
 */
import Todos from '../components/Todos.vue'
import Tokens from '../components/Tokens.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import Vibrate from '../components/Vibrate.vue'
import DeviceInfo from '../components/DeviceInfo.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/todos',
    component: Todos,
    meta: { auth: true }
  },
  { path: '/tokens',
    component: Tokens,
    meta: { auth: true }
  },
  { path: '/profile',
    component: Profile,
    meta: { auth: true }
  },
  { path: '/device-info',
    component: DeviceInfo,
    meta: { auth: false }
  },
  { path: '/vibrate',
    component: Vibrate,
    meta: { auth: false }
  },
  { path: '/login',
    component: Login,
    meta: { auth: false }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
