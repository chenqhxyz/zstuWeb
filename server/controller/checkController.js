module.exports = async (ctx, next) => {
    if (ctx.session.name) {
        ctx.body = {
            success: true,
            account: ctx.session.account,
            name: ctx.session.name,
            type: ctx.session.type
        };
    } else {
        ctx.body = {
            success: false,
            msg: '未登录'
        };
    }  
}
