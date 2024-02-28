import router from '@adonisjs/core/services/router'

const ToolsController = () => import('#controllers/tools_controller')

router.get('/inertia', ({ inertia }) => inertia.render('home', { version: 6 }))
router.get('/test', ({ inertia }) => inertia.render('test', { version: 6 }))

router.post('/tools', [ToolsController, 'create'])
