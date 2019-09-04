/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 20:44:28
 * @LastEditTime: 2019-09-04 20:46:14
 * @LastEditors: Please set LastEditors
 */

const isTest = ['localhost', 'http://127.0.0.1'].findIndex(item => {
  return window.location.origin.indexOf(item) > -1;
});

const image = {
  compress: (isTest > -1 ? 'http://trade.bstchain.com' : window.location.origin) + '/res/upload/image/compress.do',
  qr: (isTest > -1 ? 'http://trade.bstchain.com' : window.location.origin) + '/res/upload/image/qr.do' //
};

export default {
  image
};
