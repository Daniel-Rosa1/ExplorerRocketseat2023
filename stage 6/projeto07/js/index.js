import Router from './router.js'

const router = new Router()

router.add('/','/stage 6/projeto07/pages/home.html')
router.add('/about','/stage 6/projeto07/pages/about.html')
router.add('/contact','/stage 6/projeto07/pages/contact.html')
router.add('404','/stage 6/projeto07/pages/404.html')


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()