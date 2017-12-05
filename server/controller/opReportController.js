const report = require('../model/report.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 0) {
        const name = ctx.session.name;
        const data = await report.getReportByName(name);
        ctx.body = {
            success: true,
            data
        };
    } else if (+type === 1) {
        const fs = require("fs");
        const storePath = ctx.query.path;
        await report.deleteReport(storePath);
        fs.unlinkSync(storePath);
        ctx.body = {
            success: true,
            msg: '删除成功'
        };
    } else if (+type === 2) {
        const theClass = ctx.query.theClass;
        const data = await report.getReport(theClass);
        ctx.body = {
            success: true,
            data
        }
    } else if (+type === 3) {
        const data = await report.getAllReports();
        ctx.body = {
            success: true,
            data
        }
    }
    next();
}