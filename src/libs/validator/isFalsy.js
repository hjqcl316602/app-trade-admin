
/**
 * 判断一个值中是否是falsy值
 * @param {*} value 值
 * @param {*} validator 验证条件
 */
export default function isFalsy(value,validator =  [ '',false,0,null,undefined,NaN] ){

  for(let k = 0 ; k < validator.length ; k++){ 

    if( Number.isNaN(validator[k]) && Number.isNaN(value) || value === validator[k]) return true
  } 
  return false 
}