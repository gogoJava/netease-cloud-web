import {PLAYER_SHOW, ADD_TO_PLAY_LIST, SET_AUDIO, OPEN_LOADING, CLOSE_LOADING, PAUSE, PLAY} from '../../store/mutation-types'

export const MUTATION_NAME = 'media-player'
export default {
  [MUTATION_NAME]: {
    // 默认值
    state: {
      audio: {
        'id': 0,
        'name': '歌曲名称',
        'singer': '演唱者',
        'albumPic': '/static/icon/player-bar.png',
        'location': '',
        'album': ''
      },
      songList: [],
      playing: false, // 是否正在播放
      currentIndex: 0, // 当前播放的歌曲位置
      loading: false
    },
    mutations: {
      [PLAYER_SHOW] (state, list) {
        state.songList = list
      },
      [PAUSE] (state) {
        state.playing = false
      },
      [PLAY] (state) {
        state.playing = true
      },
      [SET_AUDIO] (state, location) {
        state.audio = state.songList[state.currentIndex - 1]
        state.audio.location = location || ''
      },
      [OPEN_LOADING] (state) {
        state.loading = true
      },
      [CLOSE_LOADING] (state) {
        state.loading = false
      },
      [ADD_TO_PLAY_LIST] (state, audio) {
        var flag = false
        state.songList.forEach(function (element, index) { // 检测歌曲重复
          if (element.id === audio.id) {
            flag = true
            state.currentIndex = index + 1
          }
        })
        if (!flag) {
          state.songList.push(audio)
          state.currentIndex = state.songList.length
        }
        console.log('播放列表', state.songList)
      }
    }
  }
}

