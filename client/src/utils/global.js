import * as utils from './index'

const requireComponent = require.context('@/base', true, /[a-z0-9]+\.(jsx?|vue)$/i)

export default {
    install(Vue) {
        requireComponent.keys().forEach(element => {
            console.log(element)
            const componentConfig = requireComponent(element)
            const componentName = componentConfig.default.name
            if (componentName) {
                Vue.component(componentName, componentConfig.default || componentConfig)
            }
        });
    }
}