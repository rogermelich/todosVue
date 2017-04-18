/**
 * Created by roger on 27/01/17.
 */
import Todos from '../components/Todos'
import Tokens from '../components/Tokens'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Vibrate from '../components/Vibrate'
import DeviceInfo from '../components/DeviceInfo'
import NotFound from '../components/NotFound'
import Cordova from '../components/Cordova'
import Exit from '../components/Exit'
import Notifications from '../components/Notifications'

const routes = [
  { path: '/android_asset/www/index.html',
    component: Todos,
    meta: { auth: true }
  },
  { path: '',
    component: Todos,
    meta: { auth: true }
  },
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
  { path: '/notifications',
    component: Notifications,
    meta: { auth: true }
  },
  { path: '/cordova',
    component: Cordova,
    meta: { auth: false }
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
  { path: '/exit',
    component: Exit,
    meta: { auth: false }
  },
  { path: '*',
    component: NotFound,
    meta: { auth: false }
  }
]

export default routes
