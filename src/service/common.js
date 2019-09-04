/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-16 09:46:04
 * @LastEditTime: 2019-09-04 20:48:40
 * @LastEditors: Please set LastEditors
 */
import { post, postConfig } from './http';
import basis from '../config/basis';
console.log(basis);
// 配置图片上传路径 可以将 trade localhost等作为测试

let isTest = ['localhost', 'trade', '127.0.0.1'].findIndex(item => {
  return window.location.origin.indexOf(item) > -1;
});

export const getMenu = data => post('/admin/system/employee/menu');

//export const uploadImage = data => postConfig('/uc/upload/oss/image',data);
export const uploadImage = data => postConfig(basis.image.compress, data);

export const getNotice = data => post('/admin/system/employee/notice');
