import request from '@/utils/request'


/**
 * 获取3公里范围内小区列表
 * @param params
 */
export function getRangeItem(params) {
  return request({
    url: '/api/Item/GetRangeItem?',
    method: 'get',
    params,
    hideloading: true
  })
}

/**
 * 查询小区
 * @param params
 */
export function getAllItemByName(params) {
  return request({
    url: '/api/Item/GetAllItemByName?',
    method: 'get',
    params,
    hideloading: true
  })
}

/**
 * 获取片区、楼号、单元列表
 * @param params
 */
export function getSubArea(params) {
  return request({
    url: '/api/Item/GetSubArea?',
    method: 'get',
    params,
    hideloading: true
  })
}

/**
 * 获取房间信息
 * @param params
 */
export function getOwnerByRoom(params) {
  return request({
    url: '/api/Item/GetOwnerByRoom?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取绑定房产验证码
 * @param params
 */
export function getOwnerCode(params) {
  return request({
    url: '/api/Sms/OwnerCode?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 绑定房产
 * @param params 参数：nameIndex( 姓名索引）  phoneIndex（手机号索引）  code（验证码）
 */
export function bindUserOwner(params) {
  return request({
    url: '/api/Item/BindUserOwner?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取缴费房间列表
 * @param params 参数：itemId（小区ID）
 */
export function getUserRoom(params) {
  return request({
    url: '/api/Item/GetUserRoom?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取房间缴费账单信息
 * @param params 参数：roomId（房间ID）
 */
export function getBillByRoomId(params) {
  return request({
    url: '/api/Bill/GetBillByRoomId?',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 账单支付
 * @param params 参数：bIds（账单ID，例如："10000,10001"  ）
 */
export function payBillsWeChat(params) {
  return request({
    url: '/api/Pay/PayBillsWeChat?',
    method: 'post',
    params,
    hideloading: false
  })
}

/**
 * 添加报修
 * @param data  fromData格式 图文上传功能
 */
export function addRepairs(data) {
  return request({
    url: '/api/Repair/Add',
    method: 'post',
    data,
    hideloading: false
  })
}

/**
 * 获取报修记录列表
 * @param params 参数：index（ 页码 ）  size（ 分页数量 ）  itemId（ 小区ID ）
 */
export function getRepairList(params) {
  return request({
    url: '/api/Repair/getRepair',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 获取报修详情
 * @param params 参数：id（ 报修ID ）
 */
export function getRepairDetails(params) {
  return request({
    url: '/api/Repair/GetRepairDetail',
    method: 'get',
    params,
    hideloading: false
  })
}

/**
 * 取消报修
 * @param data 参数：id（ 报修ID ）
 */
export function cancelRepair(data) {
  return request({
    url: '/api/Repair/Cancel',
    method: 'post',
    data,
    hideloading: false
  })
}

/**
 * 完成报修
 * @param data 参数：id（ 报修ID ）
 */
export function completeRepairs(data) {
  return request({
    url: '/api/Repair/AddEvaluation?',
    method: 'post',
    data,
    hideloading: false
  })
}

/**
 * 我的房产列表
 * @param params 参数：
 */
export function getUserItem(params) {
  return request({
    url: '/api/Item/GetUserItem?',
    method: 'get',
    params,
    hideloading: false
  })
}

