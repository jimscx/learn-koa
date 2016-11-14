const app = new Koa();

const router = require('koa-router')();

router.get('/',async(ctx, next) => {
	ctx.response.body = '<h1>hello world </h1>'
})