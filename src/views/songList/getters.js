import {MUTATION_NAME} from './mutations'
import {mapGetters} from '../../utils/vuex'
// 播放列表
export const playListGetter = (state) => state[MUTATION_NAME].playList
export const offsetGetter = (state) => state[MUTATION_NAME].offset
export const loadingGetter = (state) => state[MUTATION_NAME].loading
export default mapGetters({
  playList: playListGetter,
  offset: offsetGetter,
  loading: loadingGetter
})
