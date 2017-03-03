import {SET_PLAY_LIST_DETAIL, SET_LOADDING_PLAY_LIST_DETAIL} from '../../store/mutation-types'

export const MUTATION_NAME = 'play-list-detail'
export default {
  [MUTATION_NAME]: {
    // 默认值
    state: {
      playCount: 0,
      name: '歌单标题',
      description: '描述',
      coverImgUrl: '../../../static/icon/default_cover.png',
      creator: {
        'avatarUrl': '../../../static/icon/user-default.png',
        'nickname': '昵称'
      },
      list: [],
      isloading: false
    },
    mutations: {
      [SET_PLAY_LIST_DETAIL] (state, playListDetail) {
        state.name = playListDetail.name
        state.description = playListDetail.description
        state.creator = playListDetail.creator
        state.coverImgUrl = playListDetail.coverImgUrl
        state.playCount = playListDetail.playCount
        state.list = playListDetail.list
        state.isloading = false
      },
      [SET_LOADDING_PLAY_LIST_DETAIL] (state, isloading) {
        state.isloading = isloading
      }
    }
  }
}

