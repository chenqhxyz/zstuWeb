const user = require('../model/user.js');
module.exports = async (ctx, next) => {
	const info = ctx.query.info.split(',');
	const name = info[0];
	const account = info[1];
	const password = info[2];
	const type = info[3];
	const data = await user.findByAccount(account);
	if (data) {
		ctx.body = {
			success: false,
			msg: '该账号已被注册！'
		};
		next();
	} else {
		await user.addUser(name, account, password, type);
		ctx.body = {
			success: true,
			msg: '注册成功！'
		};
		next();
	}
}
