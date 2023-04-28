import AMapLoader from '@amap/amap-jsapi-loader'

const config = {
  'key': '',
  'securityJsCode': ''
}

const locationOption = {
  enableHighAccuracy: true,//是否使用高精度定位，默认:true
  timeout: 10000,          //超过10秒后停止定位，默认：无穷大
  maximumAge: 0,           //定位结果缓存0毫秒，默认：0
  convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
  showButton: true,        //显示定位按钮，默认：true
  buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
  buttonOffset: null,      //定位按钮与设置的停靠位置的偏移量，默认：new AMap.Pixel(10,20)
  showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
  showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
  panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
  zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
}

/**
 * todo 加载高德地图实例
 * @param plugins
 * @return {Promise<any>}
 */
export function loadMap(plugins) {
  window._AMapSecurityConfig = {
    securityJsCode: config.securityJsCode
  }
  return AMapLoader.load({
    'key': config.key,
    'version': '2.0',
    'plugins': plugins
  })
}

/**
 * todo 获取当前定位
 */
function getCurrentLocation(geocoder) {
  loadMap(['AMap.Geolocation'])
    .then(function() {
      new AMap.Geolocation(locationOption)
        .getCurrentPosition(function(status, result) {
          console.log('定位信息', result)
          getGeocoder('', result.position.lng, result.position.lat, geocoder)
        })

    }).catch(error => {
    console.log('定位失败：', error)
  })
}

/**
 * todo 获取高德逆地理位置编码
 * @param city
 * @param lng
 * @param lat
 */
export function getGeocoder(city, lng, lat, geocoderListener) {
  console.log('秘钥：', config.securityJsCode)
  const pos = [lng, lat]
  loadMap(['AMap.Geocoder'])
    .then(function() {
      new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: city
      }).getAddress(pos, function(status, result) {
        console.log('你地理位置编码：', result)
        geocoderListener(result)
      })
    }).catch(error => {

  })

}

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
      console.log('定位信息：', r)
      geoc.getLocation(r.point, function(res) {
        console.log('精确定位：', res)
        succeedCallback(res)
      })
    } else {
      errorCallback(this.getStatus())
    }
  }, { enableHighAccuracy: true })
}

export function getMap() {
  new AMap.Map('container')
}

export function getGDLocation() {
  AMap.plugin('')
}

export default {
  config,
  getCurrentLocation
}
