const router = require('koa-router')();
const dbServer = require('../db/dbServer');
const server = new dbServer();


router.get('/:code', async function(ctx, next) {
    // 对应 url
    // http://localhost:3200/user/lyk
    var code = ctx.params.code;
    var rows = await server.query('user', '*', 'code = \'' + code + '\'');
    await next();
    console.log('next after');
    ctx.state = {
        users: rows
    }
    await ctx.render('user', {});
}, async function(ctx, next) {
    console.log('next fun');
})

router.get('/', async function(ctx, next) {
    // 对应url
    // http://localhost:3200/user?id=1
    // http://localhost:3200/user?code=lyk
    var code = ctx.request.query.code;
    var rows = []
    if (code)
        var rows = await server.query('user', '*', 'code = \'' + code + '\'');
    var id = ctx.request.query.id;
    if (id)
        var rows = await server.query('user', '*', 'id = ' + id);
    ctx.state = {
        users: rows
    }
    await ctx.render('user', {});
});




module.exports = router;
