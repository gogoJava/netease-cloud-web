import {mapActions} from '../../utils/vuex'
import {CLOSE_LOADING, PLAY, PAUSE, PLAY_NEXT} from '../../store/mutation-types'
// 初始化
const init = async function (store) {
}

const canPlaySong = async function (store) {
  store.commit(CLOSE_LOADING)
  store.commit(PLAY)
  document.getElementById('audioPlay').play()
}

// 播放/暂停
const toggleStatus = async function (store) {
  console.log('播放/暂停', this.playing)
  if (this.playing) {
    document.getElementById('audioPlay').pause()
    store.commit(PAUSE)
  } else {
    document.getElementById('audioPlay').play()
    store.commit(PLAY)
  }
}

// 下一首
const nextSong = async function (store) {
  store.commit(PLAY_NEXT)
}

export default mapActions({
  init,
  canPlaySong,
  toggleStatus,
  nextSong
})
