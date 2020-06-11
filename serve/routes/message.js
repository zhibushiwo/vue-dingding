const Router = require("koa-router")
const router = new Router()
const MsgModel = require("../models/message")
const assert = require("assert")

router.post("/sendmessage", async ctx => {
    const { user } = ctx.state;
    const { to, msg, type } = ctx.request.body;
    console.log(to, msg, type)
    let message = new MsgModel({
        to,
        msg,
        type,
        from: user._id
    })
    console.log(message)
    await message.save()
})

router.post("/upload", async ctx => {
    
})

router.get("/getmessage", async ctx => {
    const { user } = ctx.state;
    const { fid } = ctx.query;
    const msgs = await MsgModel.find({
        "$or": [
            { 'from': user._id, 'to': fid },
            { 'from': fid, 'to': user._id }
        ]
    }).sort({
        createAt: 1
    }).exec()

    const content = msgs.map(({
        from,
        to,
        createAt,
        type,
        msg
    }) => {
        const isSend = from == user._id ? 0 : 1
        return {
            isSend,
            from,
            to,
            createAt,
            type,
            msg
        }
    })
    ctx.body = content
})

module.exports = router