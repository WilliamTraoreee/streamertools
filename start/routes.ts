import router from '@adonisjs/core/services/router'

const ToolsController = () => import('#controllers/tools_controller')
const AuthController = () => import('#controllers/auth_controller')

// router.get('/inertia', ({ inertia }) => inertia.render('home', { version: 6 }))
// router.get('/test', ({ inertia }) => inertia.render('test', { version: 6 }))

router.get('/', ({ inertia }) => inertia.render('home', { version: 6 }))
router.get('/login', ({ inertia }) => inertia.render('login'))

router.get('/auth/twitch', [AuthController, 'redirect'])
router.get('/auth/twitch/callback', [AuthController, 'callback'])

router.get('/user/me', [AuthController, 'me'])

router.post('/tools', [ToolsController, 'create'])
