/**
 * 获取终端设备权限监听
 * @param iosListener IOS 回调
 * @param androidListener android 回调
 * @param wxListener wx回调
 * @param miniProgramListener 小程序回调
 * @param browserListener 浏览器回调（ weibo、qq、safari、google、microsoft（ 微软 ）、firefox ）
 */
export function getDeviceManagerListener(iosListener, androidListener, wxListener, miniProgramListener, browserListener) {
  const device = getDeviceManager()
  switch (device) {
    case 'miniProgram':
      miniProgramListener(device)
      break
    case 'wechat':
      wxListener(device)
      break
    case 'android':
      androidListener(device)
      break
    case 'ios':
      iosListener(device)
      break
    case 'weibo':
      browserListener(device)
      break
    case 'qq':
      browserListener(device)
      break
    case 'safari':
      browserListener(device)
      break
    case 'google':
      browserListener(device)
      break
    case 'microsoft':
      browserListener(device)
      break
    case 'firefox':
      browserListener(device)
      break
  }
}

/**
 * 获取终端设备
 * @return {string}
 */
export function getDeviceManager() {
  console.log('设备终端：', getWindowNavigator())

  if (isMiniProgram()){
    return 'miniProgram'
  }

  if (isWechat()) {
    return 'wechat'
  }

  if (isSafari()) {
    return 'safari'
  }

  if (isGoogle()) {
    return 'google'
  }

  if (isMicrosoft()) {
    return 'microsoft'
  }

  if (isFirefox()) {
    return 'firefox'
  }

  if (isWeibo()) {
    return 'weibo'
  }

  if (isQQ()) {
    return 'qq'
  }

  if (isAndroid()) {
    return 'android'
  }

  if (isIOS()) {
    return 'ios'
  }
}

/**
 * 是否android终端设备
 * @returns {boolean}
 */
export function isAndroid() {
  return getWindowNavigator().toLowerCase().indexOf('Android') > -1 || getWindowNavigator().indexOf('Linux') > -1 //是否安卓终端
}

/**
 * 是否ios终端设备
 * @returns {boolean}
 */
export function isIOS() {
  return !!getWindowNavigator().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //是否ios终端
}

/**
 * 是否微信浏览器
 * @return {boolean}
 */
export function isWechat() {
  return getWindowNavigator().toLowerCase().match(/MicroMessenger/i) == 'micromessenger' //是否在微信浏览器
}

/**
 * 是否小程序
 * @return {boolean}
 */
export function isMiniProgram() {
  return getWindowNavigator().indexOf('miniProgram') > -1 // 是否在小程序
}

/**
 * 是否微博浏览器
 * @return {boolean}
 */
export function isWeibo() {
  return getWindowNavigator().toLowerCase().match(/WeiBo/i) == 'weibo' // 是否在微博浏览器
}

/**
 * 是否QQ浏览器
 * @return {boolean}
 */
export function isQQ() {
  return getWindowNavigator().toLowerCase().match(/QQ/i) == 'qq'
}

/**
 * 是否Safari浏览器
 * @return {boolean}
 */
export function isSafari() {
  return getWindowNavigator().toLowerCase().match(/version\/([\d.]+).*safari/) && getWindowNavigator().indexOf('Macintosh; Intel Mac OS') > -1
}

/**
 * 是否google浏览器
 * @return {boolean}
 */
export function isGoogle() {
  return getWindowNavigator().toLowerCase().match(/chrome\/([\d.]+)/) && (getWindowNavigator().indexOf('Macintosh; Intel Mac OS') > -1 || getWindowNavigator().indexOf('Windows') > -1)
}

/**
 * 是否IE浏览器
 * @return {boolean}
 */
export function isMicrosoft() {
  return getWindowNavigator().toLowerCase().match(/edge\/([\d.]+)/) && getWindowNavigator().indexOf('Windows') > -1
}

/**
 * 是否火狐浏览器
 * @return {boolean}
 */
export function isFirefox() {
  return getWindowNavigator().toLowerCase().match(/firefox\/([\d.]+)/) && getWindowNavigator().indexOf('Windows') > -1
}

/**
 * 获取设备管理器
 * todo Safari             ： Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15
 * todo google ( Mac )     ： Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
 * todo google ( windows ) ： Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36
 * todo Firefox            ： Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0
 * todo IE                 ： Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.48
 * todo IOS                ： Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1
 * todo Android            ： Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36
 * todo wx                 ： Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.3 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1 wechatdevtools/1.06.2301160 MicroMessenger/8.0.5 Language/zh_CN webview/16822120470857426 webdebugger port/12484 token/6fe6f5dd064aedc55199106a81b067cc
 * todo 小程序              ： Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1 wechatdevtools/1.06.2301160 MicroMessenger/8.0.5 Language/zh_CN webview/18397_148 webdebugger miniprogramhtmlwebview miniProgram port/57892"
 * @return {string}
 */
export function getWindowNavigator() {
  return window.navigator.userAgent
}


export default {
  getDeviceManager,
  getDeviceManagerListener,
  getWindowNavigator,
  isIOS,
  isAndroid,
  isWechat,
  isWeibo,
  isQQ,
  isSafari,
  isGoogle,
  isMicrosoft,
  isFirefox
}
