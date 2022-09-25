import express from 'express'
import helmet from 'helmet'
import settings from '../config/settings'
import { router } from './router'

const app = express()

app.use(helmet())
app.use(express.json({}))
app.use(router)

app.listen(8080, () => {
     console.info(`Server started on port ${settings.port}`)
})
