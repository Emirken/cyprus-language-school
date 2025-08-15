import { createStore } from 'vuex'
/*import user from './modules/user'
import courses from './modules/courses'*/
import settings from './modules/settings'

export default createStore({
  modules: {
/*    user,
    courses,*/
    settings
  }
})