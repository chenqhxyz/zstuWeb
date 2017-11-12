module.exports = function(ctx, next) {
	const info = ctx.query.info.split(',');
	const name = info[0];
	const account = info[1];
	const password = info[2];
	ctx.body = {
            success: true,
            info: {
            	name,
            	account,
            	password
            },
            msg: '注册成功'
        };
	next();
}
