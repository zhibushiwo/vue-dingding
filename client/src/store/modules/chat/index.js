export default {
    state: {
        chat: null
    },
    getters: {
        chat: (state) => state.chat
    },
    mutations: {
        setChat(state, chat) {
            state.chat = chat
        }
    },
    actions: {

    },
}