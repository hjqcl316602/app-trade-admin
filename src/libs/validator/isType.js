
/*********************** 判断数据类型 - 一种或多种  ********************* */

 /**
  * 
  * @param  arguments 
  * _isType({},'object') => true
  * _isType({},'object','number') => true
  * _isType() => false
  * _isType({}) => false
  */


 export default function isType() {
   let args = Array.from(arguments)
   if (args.length === 0) return false; // 是否有参数传递，否则返回false
   let value = args.shift();
   if (args.length === 0) return false; // 是否有类型的参数 ，否则false
   let type = Object.prototype.toString.call(value).slice(8, -1);
   return args.some((item) => {
     return item.toUpperCase() === type.toUpperCase()
   })
 }

 /**
  * 判断一个数据的类型
  * @param {o} 需要判断的数据
  */
 export function type(o){
  return Object.prototype.toString.call(o).slice(8, -1);
 }
 