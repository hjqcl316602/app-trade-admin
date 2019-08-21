
/**
 * 判断是否是数值
 * @param {num} num 需要验证的数据
 */

export default function isNumber(num) {
  return typeof (num) === 'number' //  validators.isType(num,'number')
}

/**
 * 判断一个数字是常用的数字
 * @param {num} num 
 */

export function isUsable(num) {
  return isNumber(num) && !Number.isNaN(num)
}

/**
 * 判断一个数字不是无穷大 
 * @param {num} num 
 * isFinite() 是存在的一个方法，所以不能再使用该名称
 * 
 */

export function isFinited(num){
  return Number.isFinite(num)
}

/**
 * 判断一个数字是安全范围之内的数字
 * @param {num} num 
 */

export function isSafeInteger(num){
  return Number.isSafeInteger(num)
}


/**
 * 判断一个值是否是整型
 * @param {num} num 
 */
export function isInt(num) {
  return Number.isInteger(num)
}

/**
 * 判断一个数是否是正整数
 * @param {num} num 
 */

export function isIntPlus(num) {
  return Number.isInteger(num) && num > 0
}

/**
 * 判断一个数是负整数
 * @param {num} num 
 */

export function isIntMinus(num) {
  return Number.isInteger(num) && num < 0
}


// isNumber.MIN_SAFE_INTEGER =  Number.MIN_SAFE_INTEGER // -9007199254740991
// isNumber.MAX_VALUE =  Number.MAX_VALUE // -9007199254740991
// isNumber.MIN_VALUE = Number.MIN_VALUE  // 5e-324 不是负数的意思，是小数,所以  0 > Number.MIN_VALUE
// isNumber.MAX_SAFE_INTEGER =  Number.MAX_SAFE_INTEGER // 9007199254740991

// isNumber() 判断一个值是否是数字

// console.log(validators.isNumber(5e-400)) true
// console.log(validators.isNumber(1e+309)) true
// console.log(validators.isNumber(1/0)) true
// console.log(validators.isNumber(Infinity)) true
// console.log(validators.isNumber(NaN)) true
// console.log(validators.isNumber(-1)) true
// console.log(validators.isNumber(1.5)) true
// console.log(validators.isNumber([])) false
// console.log(validators.isNumber(null)) false
// console.log(validators.isNumber('')) false
// console.log(validators.isNumber(false)) false
// console.log(validators.isNumber({})) false


// isInt() 判断一个数值是否是整数

// isInt(0);         // true
// isInt(1);         // true
// isInt(-100000);   // true
// isInt(99999999999999999999999); // true
// 
// isInt(0.1);       // false
// isInt(Math.PI);   // false
// isInt(NaN);       // false
// isInt(Infinity);  // false
// isInt(-Infinity); // false
// isInt('10');      // false
// isInt(true);      // false
// isInt(false);     // false
// isInt([1]);       // false

//isNaN(num) 判断一个值是否是数字的情况

// console.log(!isNaN(5e-400)) true
// console.log(!isNaN(1e+309)) true
// console.log(!isNaN(1/0)) true
// console.log(!isNaN(Infinity)) true
// console.log(!isNaN(NaN)) false
// console.log(!isNaN(-1)) true
// console.log(!isNaN([])) true
// console.log(!isNaN('')) true
// console.log(!isNaN(false)) true
// console.log(!isNaN({})) false