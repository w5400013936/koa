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
        if (req.menu_name) {
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
        } else {
            ctx.body = {
                code: 406,
                msg: "创建失败",
                data: {}
            }
        }
    }

    static async updateMenu(ctx) {
        let req = ctx.request.body;
        console.log(req)
        if (req.id) {
            let data = await MenuModel.updateMenu(req);
            let resData = await MenuModel.getMenuById(data.id);
            ctx.body = {
                code: 200,
                msg: "修改成功",
                data: {
                    ...resData
                }
            }
        } else {
            ctx.body = {
                code: 406,
                msg: "修改失败",
                data: {}
            }
        }
    }

    static async deleteMenu(ctx) {
        let req = ctx.request.body;
        console.log(999,req)
        if (req.id) {
            let data = await MenuModel.deleteMenu(req.id);
            let resData = await MenuModel.getMenuById(data.id);
            if (!resData) {
                ctx.body = {
                    code: 200,
                    msg: "删除成功",
                    data: null
                }
            } else {
                ctx.body = {
                    code: 406,
                    msg: "删除失败",
                    data: null
                }
            }
        } else {
            ctx.body = {
                code: 406,
                msg: "删除失败",
                data: null
            }
        }
    }
}

module.exports = menuController;