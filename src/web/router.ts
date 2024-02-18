import { welcomeUseCase } from '../use_cases/welcome/welcome_use_case'
import { Router } from 'express'
import defaultMiddleware from './middlewares/default_middeware'
import welcomeEmailUseCase from '@src/use_cases/email/welcome_email_use_case'

export const router = Router()

router.get('/', defaultMiddleware(welcomeUseCase) )
router.post('/welcome-email', defaultMiddleware(welcomeEmailUseCase) )


