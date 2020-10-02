import Cookies from 'js-cookie'
const TokenKey='token'


export function getToken() { //设置token
    return Cookies.get(TokenKey)
  }
  
  export function setToken(token) {//获取token
    return Cookies.set(TokenKey, token)
  }
  
  export function removeToken() {//移除token
    return Cookies.remove(TokenKey)
  }
  