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
        from: user.id
    })
    console.log(message)
    await message.save()
})

router.get("/getmessage", async ctx => {
    const { user } = ctx.state;
    const { fid } = ctx.query;
    const msgs = await MsgModel.find({
        "$or": [
            { 'from': user.id, 'to': fid },
            { 'from': fid, 'to': user.id }
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
        const isSend = from == user.id ? 0 : 1
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