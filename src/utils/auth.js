import Cookies from 'js-cookie'


// 缓存用户token信息
export function setToken(token) {
  /* 如果cookie为session---静默清除---无操作20分钟心跳清除*/
  return Cookies.set('USER_TOKEN', token) // 心跳
}

export function getToken() {
  return Cookies.get('USER_TOKEN')
}

export function removeToken() {
  return Cookies.remove('USER_TOKEN')
}

// 缓存商城标识
export function setSkiShop() {
  return Cookies.set('SKIP_SHOP', 1)
}

export function getSkipShop() {
  return Cookies.get('SKIP_SHOP')
}

export function removeSkipShop() {
  return Cookies.remove('SKIP_SHOP')
}


// 缓存活动标识
export function setActive() {
  return Cookies.set('SKIP_ACTIVE', 1)
}

export function getActive() {
  return Cookies.get('SKIP_ACTIVE')
}

export function removeActive() {
  return Cookies.remove('SKIP_ACTIVE')
}

// 缓存用户信息
export function setUser(user) {
  return Cookies.set('USER_INFO', user)
}

export function getUser() {
  return Cookies.get('USER_INFO')
}

export function removeUser() {
  return Cookies.remove('USER_INFO')
}

// 缓存小区信息
export function setHous(user) {
  return Cookies.set('HOUS_INFO', user)
}

export function getHous() {
  return Cookies.get('HOUS_INFO')
}

export function removeHous() {
  return Cookies.remove('HOUS_INFO')
}

// 缓存定位信息
export function setLocation(user) {
  return Cookies.set('LOCATION_INFO', user)
}

export function getLocation() {
  return Cookies.get('LOCATION_INFO')
}

export function removeLocation() {
  return Cookies.remove('LOCATION_INFO')
}
