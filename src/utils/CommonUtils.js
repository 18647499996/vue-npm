/**
 * JS byte数组转字符串（ 支持文字 ）
 * @param arr byte数组
 * @returns {string}
 */
export function byteToString(arr) {
  //声明一个Uint8Array，经常被用来存放字节
  let bytes = new Uint8Array(arr)

  //声明空字符串
  let str = ''
  for (let i = 0; i < bytes.length; i++) {
    //用16进制表示字节
    let k = bytes[i].toString(16)
    //如果只有1位在前面补0
    if (k.length === 1) k = '0' + k
    //储存为URI格式
    str += '%' + k
  }
  // output就是bytes转换后的string啦！
  return transformUTF8(decodeURI(str))
}

/**
 * JS UTF-8转汉子
 * @param str
 * @returns {string}
 */
export function transformUTF8(str) {
  let x, wch, wch1, wch2, uch = '', szRet = ''
  for (x=0; x<str.length; x++) {
    if (str.charAt(x)==="%") {
      wch =parseInt(str.charAt(++x) + str.charAt(++x),16);
      if (!wch) {break;}
      if (!(wch & 0x80)) {
        wch = wch;
      } else if (!(wch & 0x20)) {
        x++;
        wch1 = parseInt(str.charAt(++x) + str.charAt(++x),16);
        wch  = (wch & 0x1F)<< 6;
        wch1 = wch1 & 0x3F;
        wch  = wch + wch1;
      } else {
        x++;
        wch1 = parseInt(str.charAt(++x) + str.charAt(++x),16);
        x++;
        wch2 = parseInt(str.charAt(++x) + str.charAt(++x),16);
        wch  = (wch & 0x0F)<< 12;
        wch1 = (wch1 & 0x3F)<< 6;
        wch2 = (wch2 & 0x3F);
        wch  = wch + wch1 + wch2;
      }
      szRet += String.fromCharCode(wch);
    } else {
      szRet += str.charAt(x);
    }
  }
  return(szRet);
}

export default {
  byteToString,
  transformUTF8
}
