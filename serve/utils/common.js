const { v4: uuidv4 } = require('uuid');

const GUID = () => {
    return uuidv4();
}

const formatDate = (date, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    date = date instanceof Date ? date : new Date(date)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
    }
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            const str = o[k] + ''
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
            )
        }
    }
    return fmt
}


module.exports = {
    GUID,
    formatDate
}