import {request} from './common'
const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic'
export const getPlayListApi = (cat, order, offset, total, limit) => {
  // cat: 种类(默认hot)，其它参数，参考：http://music.163.com/#/discover/playlist中的分类名称
  // order: 排序规则（默认为hot）
  // offset: 偏移量,用于分页(默认0)
  // total: 该分类下总数目
  // limit: 分页所用， 返回的条数(默认50)
  return request({
    url: _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit,
    method: 'get'
  })
}
export const getPlayListDetailApi = (id) => {
  return request({
    url: _baseUrl2 + '?type=playlist&id=' + id,
    method: 'get'
  })
}
export const getSongApi = (id) => {
  return request({
    url: _baseUrl + '?type=url&id=' + id,
    method: 'get'
  })
}
