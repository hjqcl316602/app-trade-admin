
/**
 * 正则表达式
 */

export default   {
  ['empty']:new RegExp(/^\s*$/),//判断是不是空字符串，'' ' ',
  ['email']:new RegExp(/^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i) , // email
  ['mobile']:new RegExp(/^(11|12|13|14|15|16|17|18|19)[0-9]{9}$/),    // mobile
  ['number']:new RegExp(/^[0-9]*$/) ,          // number
  ['specialCodeEn']:new RegExp(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im),   // 英文特殊字符
  ['specialCodeCn']:new RegExp(/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im),   // 中文特殊字符
};