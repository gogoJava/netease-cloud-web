import {mapActions} from '../../utils/vuex'
import {getPlayListApi} from '../../api/index'
import {SET_PLAY_LIST, SET_LOADDING} from '../../store/mutation-types'
import {GET_SONG_LIMIT} from '../../constant'
// 初始化
const init = async function (store) {
  // this.loading = true
  store.commit(SET_LOADDING, true)
  const resp = await getPlayListApi('全部', 'hot', this.offset, true, GET_SONG_LIMIT)
  // console.log('=================')
  // console.log(resp)
  var total = resp.total || 0
  var list = resp.playlists || []
  await store.commit(SET_PLAY_LIST, list, total)
  // this.loading = false
}

// 获取歌单
const getPlayList = async () => {
  this.loading = true
  const resp = await getPlayListApi('全部', 'hot', this.offset, true, GET_SONG_LIMIT)
  console.log('=================')
  console.log(resp)
  var total = resp.total || 0
  var list = resp.playlists || []
  for (let i = 0; i < list.length; i++) {
    this.playList.push(list[i])
  }
  this.offset = this.offset + 6
  if (this.offset > total) {
    this.offset = total
  }
  this.loading = false
}

export default mapActions({
  init,
  getPlayList
})
