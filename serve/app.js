const Koa = require('koa');
const app = new Koa();
const mongoose = require("mongoose");
const KoaBody = require("koa-body");
const db = require("./config/key").mongoURI;
const routes = require("./routes");
const catchError = require("./middlewares/catchError")
const response_formatter = require("./middlewares/response_formatter")
//const passport = require("passport");
const Koajwt = require('koa-jwt');
const keys = require("./config/key");
const GetCurrentUser = require("./middlewares/curuser")
const Socket = require("socket.io")
const http = require("http")
const server = http.createServer(app.callback()).listen(3008)
const io = Socket(server)
const static = require("koa-static")
const Message = require("./models/message")
const path = require("path")

io.on("connection", socket => {
    socket.on("join", data => {
        const { uid, fid } = data
        const arr = [uid, fid].sort((prev, next) => { return prev.localeCompare(next) })
        socket.join(arr[0] + '_' + arr[1], () => {
            console.log(1)
        })
    })
    socket.on("joinroom", data => {
        socket.join(data)
    })


    socket.on("sendmsg", async message => {
        const { from, to, type, msg } = message
        const mes = new Message({
            from, to, type, msg
        })
        await mes.save()
        const arr = [from, to].sort((prev, next) => { return prev.localeCompare(next) })
        io.in(arr[0] + '_' + arr[1]).emit("getmsg", {
            from,
            type,
            msg
        })
        io.to(to).emit("getmsg", {
            from,
            type,
            msg
        })
    })
})

//const tokenAccess = require("./middlewares/tokenAccess")
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("db connet"))
    .catch(err => console.log("err" + err));

app.use(static(path.join(__dirname, keys.staticPath)))
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFieldsSize: 2 * 1024 * 1024,
    }
}));

app.use(
    Koajwt({
        secret: keys.secretKey
    }).unless({
        path: [/\/user\/login/, /\/user\/register/, /\/public/]
    })
);
app.use(GetCurrentUser())
//app.use(tokenAccess)
// app.use(passport.initialize());
// require("./config/passport")(passport);
app.use(catchError())
app.use(response_formatter())
app.use(routes.routes(), routes.allowedMethods());



app.listen(3001);