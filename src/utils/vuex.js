// @flow

import {mapState} from 'vuex'

export const mapGetters = mapState

export const mapActions = (actions) => {
  const res = {}
  Object.keys(actions).forEach(key => {
    res[key] = function (...args) {
      return actions[key].call(this, this.$store, ...args)
    }
  })
  return res
}

