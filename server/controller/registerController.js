const user = require('../model/user.js');
module.exports = async (ctx, next) => {
	const time1 = Date.now();
	const info = ctx.query.info.split(',');
	const name = info[0];
	const account = info[1];
	const password = info[2];
	const type = info[3];
	if (+type === 1) {
		const position = "学生";
	} else if (+type === 2) {
		const position = "教师";
	} else if (+type === 3) {
		const position = "管理员";
	}
	const data = await user.findByAccount(account);
	if (data) {
		ctx.body = {
			success: false,
			msg: '该账号已被注册！'
		};
		next();
	} else {
		ctx.body = {
			success: true,
			msg: '注册成功！'
		};
		next();
	}
}
