/**
 * 通常我们建议使用常量去命名一个 mutation, 并且把这些常量放在单独的地方。这样做可以让你的代码合作者对整个 app 包含的 mutations 一目了然
 *
 * 用不用常量取决于你 —— 在需要多人协作的大型项目中，这会很有帮助
 **/
// player
export const PLAYER_SHOW = 'player/PLAYER_SHOW'
export const ADD_TO_PLAY_LIST = 'player/ADD_TO_PLAY_LIST'
export const SET_AUDIO = 'player/SET_AUDIO'
export const OPEN_LOADING = 'player/OPEN_LOADING'
export const CLOSE_LOADING = 'player/CLOSE_LOADING'
export const PLAY = 'player/PLAY'
export const PAUSE = 'player/PAUSE'
export const CAN_PLAY_SONG = 'player/CAN_PLAY_SONG'
// songList
export const SET_PLAY_LIST = 'songList/SET_PLAY_LIST'
export const SET_LOADDING = 'songList/SET_LOADDING'
// playListDetail
export const SET_PLAY_LIST_DETAIL = 'playListDetail/SET_PLAY_LIST_DETAIL'
export const SET_LOADDING_PLAY_LIST_DETAIL = 'playListDetail/SET_LOADDING_PLAY_LIST_DETAIL'
