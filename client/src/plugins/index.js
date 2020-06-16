import Confirm from './Confirm';
export const myPlugins = {
    install: (Vue) => {
        Vue.prototype.$Confirm = Confirm;
    }
}
