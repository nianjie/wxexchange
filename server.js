const Koa = require('koa')
const app = new Koa()
const debug = require('debug')('wxexchange')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')
const config = require('./config')

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
const router = require('./routes')
app.use(router.routes())
console.log('before listen')
// 启动程序，监听端口
app.listen(config.port, v => debug(`listening on port ${v}`))
console.log('after listen')
