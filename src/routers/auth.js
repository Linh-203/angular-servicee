import express from 'express'
import { signIn, SinUp } from '../controller/auth.js'

const authRouter = express.Router()
authRouter.post('/signup', SinUp)
authRouter.post('/signin', signIn)
export default authRouter
