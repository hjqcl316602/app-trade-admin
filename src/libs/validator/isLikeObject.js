

/*********************** 判断是否是对象  ********************* */

/** 
 * Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof` result of "object".
 * typeof value === 'object' 有三种情况 {} [] null 
 * @param {*} value 验证的对象
 */
export default function isLike(value){
  return typeof value === 'object' && value !== null 
}