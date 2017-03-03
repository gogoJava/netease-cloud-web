import {mapActions} from '../../utils/vuex'
import {CLOSE_LOADING, PLAY, PAUSE} from '../../store/mutation-types'
// 初始化
const init = async function (store) {
}

const canPlaySong = async function (store) {
  store.commit(CLOSE_LOADING)
  store.commit(PLAY)
  document.getElementById('audioPlay').play()
}
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

export default mapActions({
  init,
  canPlaySong,
  toggleStatus
})
