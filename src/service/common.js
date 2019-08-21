import { post, postConfig } from './http';

// 配置图片上传路径 可以将 trade localhost等作为测试

let isTest = ['localhost', 'trade', '127.0.0.1'].findIndex(item => {
  return window.location.origin.indexOf(item) > -1;
});

export const getMenu = data => post('/admin/system/employee/menu');

//export const uploadImage = data => postConfig('/uc/upload/oss/image',data);
export const uploadImage = data => postConfig((isTest > -1 ? 'http://103.91.217.67' : window.location.origin) + '/res/upload/image/compress.do', data);

export const getNotice = data => post('/admin/system/employee/notice');
