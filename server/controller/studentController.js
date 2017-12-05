const student = require('../model/student.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 0) {
        const account = ctx.query.account;
        const data = await student.exist(account);
        ctx.session.class = data.theClass;
        ctx.body = {
            success: true,
            data
        }
    } else if (+type === 1) {
        const account = ctx.query.account;
        const name =ctx.query.name;
        const theClass = ctx.query.theClass;
        await student.addOne(account, name, theClass);
        ctx.body = {
            success: true,
            msg: '信息输入成功'
        }
    }
}