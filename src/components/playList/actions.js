import {mapActions} from '../../utils/vuex'
import {SET_AUDIO_INDEX, REMOVE_AUDIO} from '../../store/mutation-types'
// 初始化
const init = async function (store) {
}

const play = async function (store, index) {
  console.log('播放', index)
  store.commit(SET_AUDIO_INDEX, index)
}

const remove = async function (store, index) {
  console.log('从播放列表中移除', index)
  store.commit(REMOVE_AUDIO, index)
}

export default mapActions({
  init,
  play,
  remove
})
