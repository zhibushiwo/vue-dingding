const Router = require("koa-router");
const router = new Router();
const assert = require("assert")
const FriendModel = require("../models/friends")
router.post('/addFriend', async ctx => {
    const { fid } = ctx.request.body;
    const { user } = ctx.state;
    assert(fid != user._id, '不能加自己')
    const isExist = await FriendModel.exists({
        "$or": [
            { 'UserA': user._id, 'UserB': fid },
            { 'UserA': fid, 'UserB': user._id }
        ]
    });
    assert(!isExist, '你两已经是好友了')
    const friend = new FriendModel({
        UserA: user._id,
        UserB: fid
    })
    friend.save()
})

router.get('/getMyFriend', async ctx => {
    const { user } = ctx.state;
    const friendA = await FriendModel.find({ UserA: user._id, state: 1 }).populate("UserB", {
        name: 1,
        _id: 1
    }).exec()

    const friendB = await FriendModel.find({ UserB: user._id, state: 1 }).populate("UserA", {
        name: 1,
        _id: 1
    }).exec()
    // 
    const all = await FriendModel.find()
    const myFriend = friendA.map(({ UserB }) => UserB).concat(friendB.map(({ UserA }) => UserA))
    ctx.body = myFriend
})

router.get('/getnewfriend', async ctx => {
    const { user } = ctx.state;
    const friendB = await FriendModel.find({ UserB: user._id }).populate("UserA", {
        name: 1,
        state: 1,
        _id: 1
    }).sort({
        state: 1
    }).exec()
    const myFriend = friendB.map(({ state, UserA }) => {
        const { name, _id } = UserA
        return {
            state,
            name,
            _id
        }
    })
    ctx.body = myFriend
})


router.post('/acceptfriend', async ctx => {
    const { user } = ctx.state;
    const { fid } = ctx.request.body
    console.log(user, fid)
    const friend = await FriendModel.findOneAndUpdate({ UserA: fid, UserB: user._id }, { state: 1 })
})

module.exports = router