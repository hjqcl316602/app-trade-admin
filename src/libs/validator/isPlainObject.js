
import _isType from './isType'

/*********************** 判断一个对象是否是纯粹的对象  ********************* */

// 纯粹的对象 - 该对象是通过'{}'和'new Object()'方式创建的

/**
 * 
 * @param {*} value 需要验证的对象
 */
export default function isPlain(value){ 
  
  if(!_isType(value,'object')) return false 

  let proto = value 
  
  while (Object.getPrototypeOf(proto) !== null) { 
    proto = Object.getPrototypeOf(proto) 
  }
  return Object.getPrototypeOf(value) === proto // 指向同一个object原型对象

}