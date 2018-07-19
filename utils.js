

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
 *   return => [[1, 2, 3], [4, 5, 6], [7, 8]]
 */
function paging(data, size) {
    var i = 0, n = data.length, result = [];
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
    const unit = 1024
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const overSizeTips = '大于1024YB'
    const exponent = Math.floor(Math.log(bytes) / Math.log(unit))
    const size = (bytes / Math.pow(unit, exponent)).toFixed(digits)
    return exponent >= units.length ? overSizeTips : [size, units[exponent]].join(space ? ' ' : '')
}