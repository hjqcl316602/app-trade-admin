
import regexs from './regexs'

import types from './types'

/**
 * 验证数据
 * @param {valid} valid 需要验证的数据
 * @param {validatorType} validatorType 验证的方式，[ false/当执行到验证不通过，即返回,true/需要全部数据验证，最终返回提示信息的数组 ]
 * @param {context} context 执行上下文，即this的指向
 */

export default function validator(valid, validatorType = false, context = this) {

  if (!Array.isArray(valid)) {
    throw new TypeError('vaild type is not array!')
  }
  if (valid.length < 1) {
    throw new TypeError('vaild len should greate than 0 !')
  }

  if (typeof (validatorType) !== 'boolean') {
    throw new TypeError('validatorType type is not boolean !')
  }


  let validators = [];
  for (let n = 0; n < valid.length; n++) {
    let rulesTemp = valid[n]["rules"];
    for (let k = 0; k < rulesTemp.length; k++) {
      let rule = rulesTemp[k];
      if (!rule["rule"].call(context, valid[n]["value"], types, regexs)) {
        if (validatorType) {
          validators.push(rule["message"]);
        } else {
          return rule["message"];
        }
      }
    }
  }
  if (validatorType) {
    if (validators.length > 0) {
      return validators
    } else {
      return true;
    }

  } else {
    return true;
  }

}

/***
 * 使用方法
 */

let valid = [{
    value: "",
    rules: [{
        message: "姓名不能为空！",
        rule: function (value, rules) {
          return value !== "";
        }
      },
      {
        message: "姓名长度不能大于10！",
        rule: function (value, rules) {
          return value.length < 11;
        }
      }
    ]
  },
  {
    value: "",
    rules: [{
        message: "年龄不能为空！",
        rule: function (value, rules) {
          return value !== "";
        }
      },
      {
        message: "姓名长度不能大于10！",
        rule: function (value, rules) {
          return value.length < 11;
        }
      }
    ]
  }
];

//validator(valid,false)