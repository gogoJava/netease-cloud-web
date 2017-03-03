import {MUTATION_NAME} from './mutations'
import {mapGetters} from '../../utils/vuex'
// 播放列表
export const songListGetter = (state) => state[MUTATION_NAME].songList
export const audioGetter = (state) => state[MUTATION_NAME].audio
export const loadingGetter = (state) => state[MUTATION_NAME].loading
export const playingGetter = (state) => state[MUTATION_NAME].playing
export default mapGetters({
  songList: songListGetter,
  audio: audioGetter,
  loading: loadingGetter,
  playing: playingGetter
})
