export function debounce(fn, delay) {
    let timer = null
    return function () {
        const args = arguments
        const context = this

        if (timer) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay);
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay);
        }
    }
}

export function throttle(action, delay) {
    let last = 0
    const lastTimeAction = debounce(action, delay)
    return function () {
        const curr = +new Date()
        if (curr - last > delay) {
            action.apply(this.arguments)
            last = curr
        }
        lastTimeAction()
    }
}

export function isDef(v) {
    return v !== undefined && v !== null
}

export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
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
