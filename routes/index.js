const router = require('koa-router')()

const menuController = require('../controllers/index');
const MenuModel = require('../modules');

router.get('/', menuController.getMenu);

router.get('/test', menuController.test);

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

router.post('/create', menuController.createMenu)
router.post('/update', menuController.updateMenu)
router.delete('/delete', MenuModel.deleteMenu)

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
