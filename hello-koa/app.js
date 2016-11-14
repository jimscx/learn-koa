// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const cors = require('koa-cors');
app.use(cors());
//middleware的顺序很重要,也就是调用app.use()的顺序决定了middleware的顺序。

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});


// add router middleware:
app.use(router.routes());



const login = require('./action/users/login.js')

router.get('/',async(ctx, next) => {
	ctx.response.body = '<h1>hello world </h1>'
})

router.get('/name/:name',login)
// 在端口3000监听:
app.listen(3000);	
console.log('app started at port 3000...');