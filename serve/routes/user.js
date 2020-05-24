const Router = require("koa-router");
const router = new Router();
const UserModel = require("../models/user");
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

router.get('/getList', async ctx => {
    console.log("get")
    let res = await UserModel.find();

    ctx.body = res;
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
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw err;
            newUser.password = hash
            newUser.save()
            ctx.body = newUser;
        })
    })
})

module.exports = router;

