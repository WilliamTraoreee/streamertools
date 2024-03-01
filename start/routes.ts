import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const ToolsController = () => import('#controllers/tools_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router.get('/tools/add', ({ inertia }) => inertia.render('tools/add'))
  })
  .use(middleware.auth())

router.get('/', [ToolsController, 'index'])
router.get('/tools/:slug', [ToolsController, 'show'])
router.get('/login', ({ inertia }) => inertia.render('login'))

router.get('/auth/twitch', [AuthController, 'redirect'])
router.get('/auth/twitch/callback', [AuthController, 'callback'])

router.get('/user/me', [AuthController, 'me'])

router.post('/tools', [ToolsController, 'create'])
