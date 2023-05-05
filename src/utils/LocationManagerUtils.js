import AMapLoader from '@amap/amap-jsapi-loader'
import ConstantManagerUtils from './ConstantManagerUtils'

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
    securityJsCode: ConstantManagerUtils.config.mapSecurityCode
  }
  return AMapLoader.load({
    'key': ConstantManagerUtils.config.mapKey,
    'version': '2.0',
    'plugins': plugins
  })
}

/**
 * todo 获取当前定位
 */
function getCurrentLocation(geocoderListener) {
  loadMap(['AMap.Geolocation'])
    .then(function() {
      new AMap.Geolocation(locationOption)
        .getCurrentPosition(function(status, result) {
          if (result.status === 0 && result.info === 'SUCCESS') {
            getGeocoder('', result.position.lng, result.position.lat, geocoderListener)
          } else {
            console.error('get location status：', result)
          }
        })
    }).catch(error => {
    console.error('get location error：', error)
  })
}

/**
 * todo 获取当前城市定位
 * @param currentCityLocationListener
 */
function getCurrentCityLocation(currentCityLocationListener) {
  loadMap(['AMap.CitySearch'])
    .then(function() {
      const citySearch = new AMap.CitySearch()
      citySearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          // 查询成功，result即为当前所在城市信息
          currentCityLocationListener(result)
        }
      })
    })
}

/**
 * todo 获取高德逆地理位置编码
 * @param city
 * @param lng
 * @param lat
 * @param geocoderListener
 */
export function getGeocoder(city, lng, lat, geocoderListener) {
  const pos = [lng, lat]
  loadMap(['AMap.Geocoder'])
    .then(function() {
      new AMap.Geocoder({
        // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
        city: city
      }).getAddress(pos, function(status, result) {
        if (result.info === 'OK') {
          geocoderListener(result)
        } else {
          console.error('get geocoder info status ', result)
        }
      })
    }).catch(error => {
    console.error('get geocoder info error ', error)
  })
}

/**
 * todo 获取城市天气信息
 * @param city
 * @param weatherLiveListener
 */
export function getWeatherLive(city, weatherLiveListener) {
  //加载天气查询插件
  loadMap(['AMap.Weather'])
    .then(function() {
      // 创建天气查询实例
      const weather = new AMap.Weather()
      // 执行实时天气信息查询
      weather.getLive(city, function(err, data) {
        weatherLiveListener(data)
      })
    })
}

/**
 * todo 获取城市预报天气信息
 * @param city
 * @param weatherForecastListener
 */
export function getWeatherForecast(city, weatherForecastListener) {
  loadMap(['AMap.Weather'])
    .then(function() {
      // 创建天气查询实例
      const weather = new AMap.Weather()
      //执行实时天气信息查询
      weather.getForecast(city, function(err, data) {
        weatherForecastListener(data)
      })
    })
}

/**
 * todo 周边搜索（ 关键字 ）
 * @param searchOption
 *        city:''                 兴趣点城市 可选值：城市名（中文或中文全拼）、citycode、adcode默认值：“全国”
 *        citylimit:''            是否强制限制在设置的城市内搜索，默认值为：false true：强制限制设定城市，false：不强制限制设定城市
 *        children:''             是否按照层级展示子POI数据,默认0 children=1，展示子节点POI数据，children=0，不展示子节点数据
 *        type:''                 兴趣点类别，多个类别用“|”分割，如“餐饮|酒店|电影院”
 *                                POI搜索类型共分为以下20种：
 *                                汽车服务|汽车销售|汽车维修|摩托车服务|餐饮服务|购物服务|生活服务|体育休闲服务|
 *                                医疗保健服务|住宿服务|风景名胜|商务住宅|政府机构及社会团体|科教文化服务|
 *                                交通设施服务|金融保险服务|公司企业|道路附属设施|地名地址信息|公共设施
 *                                默认值：餐饮服务、商务住宅、生活服务
 *        lang:''                 检索语言类型 可选值：zh_cn：中文简体，en：英文 默认为: zh_cn：中文简体
 *        pageSize:''             单页显示结果条数 默认值：10 取值范围：1-50，超出取值范围按最大值返回
 *        pageIndex:''            页码。（如pageIndex为2，pageSize为10，那么显示的应是第11-20条返回结果）默认值：1 取值范围：1-100，超过实际页数不返回poi
 *        extensions:''           此项默认值：base，返回基本地址信息 取值：all，返回基本+详细信息
 *        map:''                  AMap.Map对象, 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上。可选值
 *        panel:''                结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选值
 *        showCover:''            在使用map属性时，是否在地图上显示周边搜索的圆或者范围搜索的多边形，默认为true
 *        renderStyle:''          如使用了map或panel属性，renderStyle可以用来设定绘制的UI风格，缺省为'newpc'
 *                                可选值:'newpc'或'default'，'newpc'为带图片展示的新样式，'default'为原有简单样式。
 *        autoFitView:''          用于控制在搜索结束后，是否自动调整地图视野使绘制的Marker点都处于视口的可见范围
 *        keyword:''              关键字
 *
 * @param searchListener
 */
export function getPoiSearch(searchOption, searchListener) {
  loadMap(['AMap.PlaceSearch'])
    .then(function() {
      new AMap.PlaceSearch(searchOption)
        .search(searchOption.keyword, function(status, result) {
          searchListener(result)
        })
    })
}

export function getMap() {
  new AMap.Map('container')
}

export function getGDLocation() {
  AMap.plugin('')
}

export default {
  locationOption,
  getCurrentCityLocation,
  getCurrentLocation,
  getWeatherLive,
  getWeatherForecast,
  getPoiSearch
}
