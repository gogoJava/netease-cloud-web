import {MUTATION_NAME} from './mutations'
import {mapGetters} from '../../utils/vuex'
// 播放列表
export const nameGetter = (state) => state[MUTATION_NAME].name
export const descriptionGetter = (state) => state[MUTATION_NAME].description
export const creatorGetter = (state) => state[MUTATION_NAME].creator
export const coverImgUrlGetter = (state) => state[MUTATION_NAME].coverImgUrl
export const playCountGetter = (state) => state[MUTATION_NAME].playCount
export const listGetter = (state) => state[MUTATION_NAME].list
export const isloadingGetter = (state) => state[MUTATION_NAME].isloading
export default mapGetters({
  name: nameGetter,
  description: descriptionGetter,
  creator: creatorGetter,
  coverImgUrl: coverImgUrlGetter,
  playCount: playCountGetter,
  list: listGetter,
  isloading: isloadingGetter
})
