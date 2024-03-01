import router from '@adonisjs/core/services/router'

const ToolsController = () => import('#controllers/tools_controller')
const AuthController = () => import('#controllers/auth_controller')

router.get('/', [ToolsController, 'index'])
router.get('/tools/add', ({ inertia }) => inertia.render('tools/add'))
router.get('/tools/:slug', [ToolsController, 'show'])
router.get('/login', ({ inertia }) => inertia.render('login'))

router.get('/auth/twitch', [AuthController, 'redirect'])
router.get('/auth/twitch/callback', [AuthController, 'callback'])

router.get('/user/me', [AuthController, 'me'])

router.post('/tools', [ToolsController, 'create'])
