import request from '@/utils/request'

/**
 * 登录
 * @param data 登录参数
 */
export function login(data) {
  return request({
    url: 'api/Token?',
    method: 'post',
    data,
    hideloading: false
  })
}

/**
 * 获取我的小区列表
 */
export function getBindRoomByUserId() {
  return request({
    url: 'api/Item/GetBindRoomByUserId?',
    method: 'get',
    hideloading: false
  })
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return request({
    url: 'api/UserInfo?',
    method: 'get',
    hideloading: false
  })
}

/**
 * 获取用户是否欠费
 */
export function getIsNotPay(params) {
  return request({
    url: 'api/UserInfo/GetIsNotPay?',
    method: 'get',
    params,
    hideloading: true
  })
}

/**
 * 获取账单列表
 * @param params
 */
export function getBillInfos(params) {
  return request({
    url: 'api/Bill/GetBillInfos?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取小区列表（区域查询）
 * @param params
 */
export function getItems(params) {
  return request({
    url: 'api/Item/GetItems?',
    method: 'get',
    params,
    hideloading: true
  })
}

/**
 * 获取小区楼号列表
 * @param params
 */
export function getZoneOrBuild(params) {
  return request({
    url: 'api/Item/GetZoneOrBuild?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取小区楼号列表（二级）
 * @param params
 */
export function getBuild(params) {
  return request({
    url: 'api/Item/GetBuild?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取小区楼号列表（三级）
 * @param params
 */
export function getUnit(params) {
  return request({
    url: 'api/Item/GetUnit?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取小区楼号列表（四级）
 * @param params
 */
export function getRoom(params) {
  return request({
    url: 'api/Item/GetRoom?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取小区楼号列表（五级"确认业务信息"）
 * @param params
 */
export function getHownerMessage(params) {
  return request({
    url: 'api/Item/GetHownerMessage?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取验证码
 * @param params
 */
export function getVerifyCode(params) {
  return request({
    url: 'api/Sms?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取验证码
 * @param params
 */
export function getBillDetails(params) {
  return request({
    url: 'api/Bill/GetBillInfo?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 账单支付
 * @param params
 */
export function billPayment(params) {
  return request({
    url: 'api/Pay/PayBillWeChat?',
    method: 'post',
    params,
    hideloading: false
  })
}

/**
 * 绑定房产
 * @param params
 */
export function bindRoom(params) {
  return request({
    url: 'api/Item/BindRoom?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取商城列表
 * @param params
 */
export function getShopList(params) {
  return request({
    url: '/api/Mall/GetMall?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取房间报修记录
 * @param params
 */
export function getRepairList(params) {
  return request({
    url: '/api/Repair/GetRepairList?',
    method: 'get',
    params,
    hideloading: false
  })
}
/**
 * 添加报修
 * @param data
 */
export function addRepairs(data) {
  return request({
    url: '/api/Repair/AddRepair',
    method: 'post',
    data,
    hideloading: false
  })
}


//new

/**
 * 获取活动列表
 * @param params
 */
 export function GetActivity(params) {
  return request({
    url: 'api/Activity/GetActivity?',
    method: 'get',
    params,
    hideloading: true
  })
}


/**
 * 获取活动奖品接口
 * @param params
 */
 export function GetPrize(params) {
  return request({
    url: 'api/Activity/GetPrize?',
    method: 'get',
    params,
    hideloading: false
  })
}


/**
 * 抽奖接口
 * @param params
 */
 export function LuckPrize(params) {
  return request({
    url: 'api/Activity/LuckPrize?',
    method: 'get',
    params,
    hideloading: false
  })
}


/**
 * 中奖记录
 * @param params
 */
 export function GetPrizeRecord(params) {
  return request({
    url: 'api/Activity/GetPrizeRecord?',
    method: 'get',
    params,
    hideloading: false
  })
}


