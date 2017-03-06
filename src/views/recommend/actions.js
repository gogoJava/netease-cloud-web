import {mapActions} from '../../utils/vuex'
import {getRecommendListApi} from '../../api/index'
import {SET_PLAY_LIST, SET_LOADDING} from '../../store/mutation-types'
// 初始化
const init = async function (store) {
  store.commit(SET_LOADDING, true)
  const resp = await getRecommendListApi('全部', 'hot', 0, true, 6)
  var total = resp.total || 0
  var list = resp.playlists || []
  await store.commit(SET_PLAY_LIST, list, total)
}

export default mapActions({
  init
})
