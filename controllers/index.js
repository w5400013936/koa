const MenuModel = require('../modules/index');

class menuController {
    static async test(ctx) {
        let ret = await MenuModel.test();
        ctx.response.status = 200;
        ctx.body = {
            code: '200',
            msg: ret
        }
    }

    static async getMenu(ctx) {
        let data = await MenuModel.getMenu();
        ctx.response.status = 200;
        ctx.body = {
            code: '200',
            msg: '查询成功',
            data
        }
    }
}

module.exports = menuController;