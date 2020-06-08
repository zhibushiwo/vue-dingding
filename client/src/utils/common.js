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
function isIE() {
    return userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE")
}

function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11  
    } else {
        return -1;//不是ie浏览器
    }
}
export function scrollToBottom(el) {
    const c = el.scrollHeight - el.offsetHeight;
    console.log(c)
    if (c > 0) {
        window.requestAnimationFrame(scrollToBottom)
        // TODO: 顺滑滚动
        if (isIE) {
            el.scrollTop = c
        } else {
            el.scrollTo(0, c)

        }
    }
}