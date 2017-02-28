/**
 * Created by roger on 27/01/17.
 */
import Todos from '../components/Todos'
import Tokens from '../components/Tokens'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Vibrate from '../components/Vibrate'
import DeviceInfo from '../components/DeviceInfo.vue'
import NotFound from '../components/NotFound'

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
    meta: { auth: false }
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
