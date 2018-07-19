

/**
 * 生成范围随机数 min <= x <= max
 * @param min
 * @param max
 * @return {number}
 */
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


/**
 * 一维数组转二维数组（前端分页）
 * @param data
 * @param size
 * @return {Array}
 * @example:
 *   data = [1, 2, 3, 4, 5, 6, 7, 8]
 *   size = 3
 *   paging(data, size) => [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
function paging(data, size) {
    let i = 0, n = data.length, result = [];
    for (; i < n; i += size) {
        result.push(data.slice(i, i + size));
    }
    return result;
}


/**
 * 字节数格式化
 * @param bytes
 * @param digits
 * @param space
 * @return {string}
 */
function formatBytes(bytes, digits = 2, space = true) {
    const unit = 1024;
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const overSizeTips = '大于1024YB';
    const exponent = Math.floor(Math.log(bytes) / Math.log(unit));
    const size = (bytes / Math.pow(unit, exponent)).toFixed(digits);
    return exponent >= units.length ? overSizeTips : [size, units[exponent]].join(space ? ' ' : '');
}


/**
 * 十六进制转RGB(A)
 * @param hex  十六进制值
 * @param toFixed  透明度保留小数点位数 default: 1
 * @return {string}
 * @example:
 *   hexToRGB('#abcdef') => rgb(171, 205, 239)
 *   hexToRGB('#abcdef80') => rgb(171, 205, 239, 0.5)
 *   hexToRGB('#abcdef80', 2) => rgb(171, 205, 239, 0.50)
 */
function hexToRGB(hex, toFixed = 1) {
    const h = hex.replace(/^\#/, '');
    const h1 = h.length === 3 ? [...h].map(item => item + item).join('') : h;
    const alpha = h1.length === 8;
    const h2 = parseInt(h1, 16);
    const r = (h2 >>> (alpha ? 24 : 16));
    const g = (h2 & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8);
    const b = (h2 & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0);
    const a = alpha ? ((h2 & 0x000000ff) / 255).toFixed(toFixed) : '';
    const rgba = (alpha ? [r, g, b, a] : [r, g, b]).join(', ');
    const str = `rgb${alpha ? 'a' : ''}(${rgba})`;
    return str;
}