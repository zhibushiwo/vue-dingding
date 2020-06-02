const Router = require("koa-router");
const router = new Router();
const UserModel = require("../models/user");
const MessageModel = require("../models/message")
const assert = require("assert")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const keys = require("../config/key")

router.post('/login', async ctx => {
    const { name, password } = ctx.request.body;
    const user = await UserModel.findOne({ name });
    assert(user, '用户名不存在');
    const isMatch = bcrypt.compare(password, user.password)
    assert(isMatch, '密码错误');
    const rule = {
        id: user.id,
        name: user.name
    }
    const token = jwt.sign(rule, keys.secretKey, { expiresIn: '24h' })
    ctx.body = {
        user,
        token
    };
})

router.get('/getlinkmen', async ctx => {
    const { user } = ctx.state
    let res = await UserModel.find();
    ctx.body = res;
})

router.get('/getuser', async ctx => {
    const { name } = ctx.query;
    let user = await UserModel.findOne({ name });
    assert(user, '用户名不存在');
    ctx.body = user;
})


router.post('/register', async ctx => {
    const { name, password } = ctx.request.body;
    const isExist = await UserModel.exists({ name });
    assert(!isExist, '用户名已被注册');
    let user = {
        name,
        password,
        avatar: ''
    }
    let newUser = new UserModel(user);
    await newUser.save()
    bcrypt.genSalt(10, async (err, salt) => {
        await bcrypt.hash(newUser.password, salt, async (error, hash) => {
            if (error) throw err;
            newUser.password = hash
            console.log(1)
            // TODO: await顺序有问题
            await newUser.save()
            console.log(12)
            ctx.body = newUser;
        })
    })
})

module.exports = router;

