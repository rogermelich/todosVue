/**
 * Created by roger on 27/01/17.
 */
import Todos from 'components/Todos.vue'
import Tokens from 'components/Tokens.vue'
import Profile from 'components/Profile.vue'

const routes = [
    { path: '/todos', component: Todos },
    { path: '/tokens', component: Tokens },
    { path: '/profile', component: Profile }
]

export default routes