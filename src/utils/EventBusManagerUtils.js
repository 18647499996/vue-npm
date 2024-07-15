
import mitt from 'mitt'
const bus = mitt();

/**
 * todo 发送事件
 * @param tag
 * @param value
 */
export function post(tag, value) {
  bus.emit(tag, value)
}

/**
 * todo 监听事件
 * @param tag
 * @param callback
 *
 */
export function register(tag, callback) {
  bus.on(tag, callback)
}

/**
 * todo 移除监听
 * @param tag
 */
export function unregister(tag) {
  bus.off(tag)
}

export default {
  post,
  register,
  unregister
}

