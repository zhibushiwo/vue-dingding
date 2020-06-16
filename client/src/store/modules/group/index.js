export default {
    state: {
        GroupAddDialog: false
    },
    getters: {
        GroupAddDialog: state => {
            return state.GroupAddDialog
        }
    },
    mutations: {
        ToggleGroupAddDialog(state) {
            state.GroupAddDialog = !state.GroupAddDialog
        }
    },
    actions: {

    }
}