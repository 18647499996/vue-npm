import { setLocation } from '@/utils/auth'

/**
 * 获取定位信息
 * @param succeedCallback 成功回调
 * @param errorCallback 失败回调
 */
export function getLocationInfo(succeedCallback, errorCallback) {
  const geoc = new BMap.Geocoder()
  const geolocation = new BMap.Geolocation()
  geolocation.enableSDKLocation()
  geolocation.getCurrentPosition(function(r) {
    if (this.getStatus() === BMAP_STATUS_SUCCESS) {
      console.log('定位信息：',r)
      geoc.getLocation(r.point, function(res) {
        console.log('精确定位：',res)
        setLocation(JSON.stringify(res))
        succeedCallback(res)
      })
    } else {
      errorCallback(this.getStatus())
    }
  }, { enableHighAccuracy: true })
}
