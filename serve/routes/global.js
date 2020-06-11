const Router = require("koa-router")
const router = new Router()
const fs = require("fs")
const { formatDate, GUID } = require("../utils/common")

router.post("/uploadfile", async ctx => {
    const file = ctx.request.files.file
    const reader = fs.createReadStream(file.path)
    const ext = file.name.split('.').pop()
    const fileDate = `public/upload/${formatDate(new Date, 'yyyyMMdd')}`
    fs.exists(fileDate, async exists => {
        if (!exists) {
            await fs.mkdir(fileDate)
        }
    })
    const filePath = `${fileDate}/${GUID()}.${ext}`
    const upStream = fs.createWriteStream(filePath)
    await reader.pipe(upStream)
    ctx.body = {
        filePath
    }
})
module.exports = router