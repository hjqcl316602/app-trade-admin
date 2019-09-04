/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-22 18:05:47
 * @LastEditTime: 2019-09-04 15:38:52
 * @LastEditors: Please set LastEditors
 */
// const qiniu = (name) => {
//   return `https://om4m02471.qnssl.com/2018/editor/${name}.svg?2`
// }

// const names = ['bold', 'italic', 'underline', 'strikethrough', 'color', 'listOrdered', 'listUnordered',
// 'listCheck', 'indent', 'outdent', 'alignLeft', 'alignCenter', 'alignRight', 'undo', 'redo',
// 'removeFormat', 'insertVideo', 'insertLink', 'insertImage', 'insertLine', 'insertQuote', 'insertBlock']
// const icons = {}

// names.forEach(name => {
//   icons[name] = qiniu(name.toLowerCase())
// })

const icons = {
  bold: require('../images/editor/icon-bold.png'),
  italic: require('../images/editor/icon-italic.png'),
  underline: require('../images/editor/icon-underline.png'),
  strikethrough: require('../images/editor/icon-strikethrough.png'),
  undo: require('../images/editor/icon-undo.png'),
  redo: require('../images/editor/icon-redo.png'),
  clear: require('../images/editor/icon-clear.png'),
  indent: require('../images/editor/icon-indent.png'),
  outdent: require('../images/editor/icon-outdent.png'),
  alignLeft: require('../images/editor/icon-align-left.png'),
  alignCenter: require('../images/editor/icon-align-center.png'),
  alignRight: require('../images/editor/icon-align-right.png'),
  insertImage: require('../images/editor/icon-image.png'),
  insertLine: require('../images/editor/icon-line.png'),
  color: require('../images/editor/icon-color.png')
};

export default icons;
