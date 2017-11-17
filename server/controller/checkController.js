module.exports = async (ctx, next) => {
    if (ctx.session.name) {
        ctx.body = {
            success: true,
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
