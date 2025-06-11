import { Router } from 'express'
import { RanetiumController } from '../controllers/RanetiumController'
import { RanetiumMiddleware } from '../middlewares/RanetiumMiddleware'

const router = Router()

router.get('/ranetium', RanetiumMiddleware, RanetiumController.hello)

export default router
