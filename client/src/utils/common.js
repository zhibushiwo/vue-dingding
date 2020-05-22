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
            }, timeout);
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