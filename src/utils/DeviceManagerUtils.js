/**
 * 申请浏览器通知权限
 * @param iosListener IOS 回调
 * @param androidListener android 回调
 * @param wxListener wx回调
 * @param h5Listener pc回调
 */
export function getDeviceManagerListener(iosListener, androidListener, wxListener, h5Listener) {
  const device = getDeviceManager()
  switch (device) {
    case 'android':
      androidListener()
      break
    case 'ios':
      iosListener()
      break
    case 'h5':
      h5Listener()
      break
    case 'wx':
      wxListener()
      break
  }
}

export function getDeviceManager() {
  let u = navigator.userAgent, ua = window.navigator.userAgent.toLowerCase()
  const isWx = ua.match(/MicroMessenger/i) == 'micromessenger' //是否在微信浏览器
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //是否安卓终端
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //是否ios终端
  if (!isWx) {
    if (isAndroid) {
      return 'android'
    } else if (isIos) {
      return 'ios'
    } else {
      return 'h5'
    }
  } else {
    return 'wx'
  }
}

export default {
  getDeviceManager,
  getDeviceManagerListener
}
