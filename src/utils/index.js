/* istanbul ignore next */
// import StatementComponents from '../components/StatementComponents'
//
// StatementComponents.install = function(Vue) {
//   Vue.component(StatementComponents.name, StatementComponents)
// }

import FormatUtils from './FormatUtils'
import ChatMessageUtils from '../utils/ChatMessageUtils'
import CommonUtils from './CommonUtils'
import NotificationUtils from './NotificationUtils'
import DeviceManagerUtils from './DeviceManagerUtils'


export default {
  ChatMessageUtils,
  FormatUtils,
  CommonUtils,
  NotificationUtils,
  DeviceManagerUtils
}
