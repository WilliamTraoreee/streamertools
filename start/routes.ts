import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const ToolsController = () => import('#controllers/tools_controller')
const AuthController = () => import('#controllers/auth_controller')
const UploadController = () => import('#controllers/upload_controller')
const AccountsController = () => import('#controllers/accounts_controller')

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

router.get('/', [ToolsController, 'index'])
router.get('/tools/:slug', [ToolsController, 'show'])

router.get('/auth/twitch', [AuthController, 'redirect'])
router.get('/auth/twitch/callback', [AuthController, 'callback'])

router.get('/user/me', [AuthController, 'me'])

router.post('/tools', [ToolsController, 'create'])
