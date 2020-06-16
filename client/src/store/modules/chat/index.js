export default {
    state: {
        CurrentChat: null,
        Conversation: [],
        UnRead: []
    },
    getters: {
        CurrentChat: (state) => state.CurrentChat,
        Conversation: (state) => {
            return state.Conversation.map(item => {
                let cur = state.UnRead.find(({ _id }) => _id == item._id)
                if (cur) {
                    item.unread = cur.count
                    item.lastMsg = cur.lastMsg
                } else {
                    item.unread = 0
                }
                return item
            })
        },
        UnRead: (state) => state.UnRead
    },
    mutations: {
        setCurrentChat(state, chat) {
            state.CurrentChat = chat
        },
        setConversation(state, con) {
            state.Conversation = con
        },
        addUnRead(state, msgData) {
            const idx = state.UnRead.findIndex(({ _id }) => _id == msgData.from)
            if (idx > -1) {
                let cur = state.UnRead[idx]
                cur.count += 1
                cur.lastMsg = msgData.type == 'image' ? '[图片]' : msgData.msg
                state.UnRead.splice(idx, 1, cur)
            } else {
                state.UnRead.push({
                    _id: msgData.from,
                    count: 1,
                    lastMsg: msgData.type == 'image' ? '[图片]' : msgData.msg
                })
            }
        },
        removeUnRead(state, id) {
            let idx = state.UnRead.findIndex(({ _id }) => _id == id)
            console.log(idx)
            state.UnRead.splice(idx, 1)
        }
    },
    actions: {

    },
}