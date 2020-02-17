const isTest = ["localhost", "http://127.0.0.1"].findIndex(item => {
  return window.location.origin.indexOf(item) > -1;
});

const image = {
  compress:
    (isTest > -1 ? "http://trade.bstchain.com" : window.location.origin) +
    "/p/upload/image/compress.do",
  qr:
    (isTest > -1 ? "http://trade.bstchain.com" : window.location.origin) +
    "/p/upload/image/qr.do" //
};

export default {
  image
};
