/* istanbul ignore next */
// import StatementComponents from '../components/StatementComponents'
//
// StatementComponents.install = function(Vue) {
//   Vue.component(StatementComponents.name, StatementComponents)
// }

import NotificationUtils from './NotificationUtils'
import DeviceManagerUtils from './DeviceManagerUtils'
import AxiosManagerUtils from './AxiosManagerUtils'
import StorageManagerUtils from './StorageManagerUtils'
import EventBusManagerUtils from './EventBusManagerUtils'

export default {
  NotificationUtils,
  DeviceManagerUtils,
  AxiosManagerUtils,
  StorageManagerUtils,
  EventBusManagerUtils,
}
