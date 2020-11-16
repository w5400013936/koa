const MenuModel = require('../modules/index');

class menuController {
    static async test(ctx) {
        let isConnected = await MenuModel.test();
        if (isConnected) {
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: 'success'
            }
        } else {
            ctx.response.status = 503;
            ctx.body = {
                code: 503,
                msg: 'failed'
            }
        }
    }

    static async getMenu(ctx) {
        let data = await MenuModel.getMenu();
        let newData = {
            list: data.rows,
            total: data.count
        }
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            msg: '查询成功',
            data: newData
        }
    }

    static async createMenu(ctx) {
        let req = ctx.request.body;
        if (req.menu_name && req.menu_type && req.parent_id) {
            let data = await MenuModel.createMenu(req);
            let resData = await MenuModel.getMenuById(data.id);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: "创建成功",
                data: {
                    ...resData
                }
            }
        }
    }
}

module.exports = menuController;