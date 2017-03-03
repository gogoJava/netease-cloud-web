export default {
  // player
  ...require('../../components/player/mutations').default,
  // views
  ...require('../../views/songList/mutations').default,
  ...require('../../views/playListDetail/mutations').default
}
