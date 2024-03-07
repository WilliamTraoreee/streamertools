import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const ToolsController = () => import('#controllers/tools_controller')
const AuthController = () => import('#controllers/auth_controller')
const UploadController = () => import('#controllers/upload_controller')
const AccountsController = () => import('#controllers/accounts_controller')
const AdminController = () => import('#controllers/admin_controller')
const AmazonController = () => import('#controllers/amazon_controller')
const GearsController = () => import('#controllers/gears_controller')
const GearCategoriesController = () => import('#controllers/gear_categories_controller')

router
  .group(() => {
    router.get('/tools/add', ({ inertia }) => inertia.render('tools/add'))
    router.post('/upload', [UploadController, 'send'])
    router.post('/logout', [AuthController, 'disconnect'])
    router.get('/account/tools', [AccountsController, 'tools'])
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('/login', ({ inertia }) => inertia.render('login'))
  })
  .use(middleware.loggedin())

router
  .group(() => {
    router.get('/admin/tools', [AdminController, 'tools'])
    router.post('/admin/tools/:id', [ToolsController, 'update'])
    router.get('admin/gears/add', [GearsController, 'addPage'])
    router.get('admin/gears', [GearsController, 'admin'])
    router.post('gear-category', [GearCategoriesController, 'create'])
    router.post('gears', [GearsController, 'create'])
    router.put('admin/gear-category/:id', [GearCategoriesController, 'update'])
    router.delete('admin/gear/:id', [GearsController, 'delete'])
    router.delete('admin/gear-category/:id', [GearCategoriesController, 'delete'])
  })
  .use(middleware.admin())

router.post('/amazon/search', [AmazonController, 'search'])
router.get('/', [ToolsController, 'index'])
router.get('/tools/:slug', [ToolsController, 'show'])
router.get('/auth/twitch', [AuthController, 'redirect'])
router.get('/auth/twitch/callback', [AuthController, 'callback'])
router.get('/user/me', [AuthController, 'me'])
router.post('/tools', [ToolsController, 'create'])
router.get('/gears', [GearsController, 'index'])
