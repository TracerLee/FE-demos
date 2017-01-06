/*
* @Author: 李海真
* @Date:   2016-12-08 02:00:31
* @Last Modified by:   李海真
* @Last Modified time: 2017-01-07 02:06:23
*/

import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
import { list } from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  modules: {
    list: list
  },
  // plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production'
})

if (module.hot) {
  module.hot.accept(['./modules'], () => {
    const newMutations = require('./modules').default

    store.hotUpdate({
      mutations: newMutations
    })
  })
}

window.store = store

export default store