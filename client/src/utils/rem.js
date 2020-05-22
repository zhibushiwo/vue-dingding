import { throttle } from './common'

export const remBase = 14

let htmlFontSize
!(function () {
    const calc = () => {
        const maxSize = 18
        const minSize = 14
        const html = document.querySelector("html")
        const width = html.clientWidth
        let size = remBase * (width / 1440)
        size = Math.min(maxSize, size)
        size = Math.max(minSize, size)
        html.style.fontSize = size + 'px'
        htmlFontSize = size
    }
    calc()
    window.addEventListener("resize", throttle(calc, 500))
})
export function toRem(px) {
    return `${px / remBase}rem`
}