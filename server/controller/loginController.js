const user = require('../model/user.js');
module.exports = async (ctx, next) => {
    const data = await user.findByAccount(ctx.query.account);
    if (data && ctx.query.password === data.password) {
        ctx.body = {
            success: true,
            msg: '登陆成功'
        };
        ctx.session.name = data.userName;
        ctx.session.type = data.type;
    } else if (data && ctx.query.password !== data.password){
        ctx.body = {
            success: false,
            msg: '密码错误'
        };
    } else {
        ctx.body = {
            success: false,
            msg: '账号不存在'
        };
    }
}
