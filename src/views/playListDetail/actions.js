import {mapActions} from '../../utils/vuex'
import {getPlayListDetailApi, getSongApi} from '../../api/index'
import {SET_PLAY_LIST_DETAIL, SET_LOADDING_PLAY_LIST_DETAIL, ADD_TO_PLAY_LIST, SET_AUDIO, OPEN_LOADING} from '../../store/mutation-types'
// 初始化
const init = async function (store) {
  // this.isloading = true
  store.commit(SET_LOADDING_PLAY_LIST_DETAIL, true)
  // console.log('id========', this.$route.params)
  const resp = await getPlayListDetailApi(this.$route.params.id)
  // this.name = this.$route.params.name || this.name
  // this.description = this.$route.params.desc || this.description
  // this.creator = this.$route.params.creator || this.creator
  // this.coverImgUrl = this.$route.params.coverImg || this.coverImgUrl
  // this.playCount = this.$route.params.count || this.playCount
  // this.list = resp.playlist.tracks
  const playListDetail = {
    name: this.$route.params.name || this.name,
    description: this.$route.params.desc || this.description,
    creator: this.$route.params.creator || this.creator,
    coverImgUrl: this.$route.params.coverImg || this.coverImgUrl,
    playCount: this.$route.params.count || this.playCount,
    list: resp.playlist.tracks
  }
  store.commit(SET_PLAY_LIST_DETAIL, playListDetail)
  // this.isloading = false
  console.log('歌单详情', resp)
}

// 播放
const playAudio = async function (store, song) {
  document.getElementById('audioPlay').pause()
  var audio = {}
  audio.id = song.id  // id
  audio.singer = song.ar[0].name // 演唱者
  audio.albumPic = song.al.picUrl
  audio.name = song.name
  // 通过Vuex改变状态
  await store.commit(ADD_TO_PLAY_LIST, audio)
  await getSong(store, audio.id)
  // store.commit(PLAYER_SHOW, [song])
}

const getSong = async function (store, id) {
  store.commit(OPEN_LOADING)
  const res = await getSongApi(id)
  // 统一数据模型，方便后台接口的改变
  var url = res.data[0].url
  store.commit(SET_AUDIO, url)
}

export default mapActions({
  init,
  playAudio
})
