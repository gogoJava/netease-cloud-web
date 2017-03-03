import {SET_PLAY_LIST, SET_LOADDING} from '../../store/mutation-types'
import {GET_SONG_LIMIT} from '../../constant'

export const MUTATION_NAME = 'song-list'
export default {
  [MUTATION_NAME]: {
    // 默认值
    state: {
      offset: 0,
      loading: false,
      playList: []
    },
    mutations: {
      [SET_PLAY_LIST] (state, list, total) {
        for (let i = 0; i < list.length; i++) {
          state.playList.push(list[i])
        }
        state.offset = state.offset + GET_SONG_LIMIT
        if (state.offset > total) {
          state.offset = total
        }
        state.loading = false
      },
      [SET_LOADDING] (state, loading) {
        state.loading = loading
      }
    }
  }
}

