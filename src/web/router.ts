import { welcomeUseCase } from '../use_cases/welcome/welcome_use_case'
import { Router } from 'express'
import defaultMiddleware from './middlewares/default_middeware'

export const router = Router()

router.get('/', defaultMiddleware(welcomeUseCase) )

