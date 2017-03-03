import Vue from 'vue'

// utils
// import sign, {createNonceStr} from '../utils/sign'
// import assertType from '../utils/assertType'

// import {add, min} from '../store/actions/loading.js'
// import store from './../store/index.js'

// localStorage accessToken的key
// const ACCESS_TOKEN_KEY = '_ACCESS_TOKEN_KEY'

// 保存accessToken
// export const saveAccessToken = (accessToken) => {
//   localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
// }

// 获取accessToken
// export const getAccessToken = () => {
//   return localStorage.getItem(ACCESS_TOKEN_KEY)
// }

/**
 * 发送请求
 * @param method
 *    get、post....
 * @param url
 *    接口url
 * @param data
 *    请求内容
 * @param options
 *    请求选项
 *    options.accessToken === null 时随机生成字符串作为accessToken
 * @returns {Promise.<TResult>|*}
 */
export const request = ({method = 'post', url, data, params, options = {}} = {}) => {
  // url = `/rest${url}`
  // url = `https://api.imjad.cn/cloudmusic${url}`
  // options.accessToken === null 时随机生成字符串作为accessToken
  // const accessToken = options.accessToken === null ? createNonceStr() : options.accessToken || getAccessToken()
  // delete options.accessToken
  //
  // const signParams = sign(accessToken)

  options.params = {
    // ...signParams,
    ...params,
    ...options.params
  }
  // add(store) // loading数量加1
  let param1
  let param2
  if (['get', 'head', 'delete', 'jsonp'].indexOf(method.toLocaleLowerCase()) !== -1) {
    param1 = {...options, body: data}
  } else {
    param1 = data
    param2 = options
  }
  return Vue.http[method](url, param1, param2)
    .catch(response => {
      // min(store) // loading数量减1
      return Promise.reject({code: 500, msg: '服务器繁忙'})
    })
    .then((response) => {
      let {data} = response
      // min(store) // loading数量减1
      // 如果code 不等于200，当作异常处理
      // TODU
      // if (assertType(data, String)) {
      //   data = JSON.parse(data)
      // }
      // if (data && data.code === 200) {
      //   return data.data === undefined ? {} : data.data
      // }
      // return Promise.reject(data)
      return data === undefined ? {} : data
    })
}
