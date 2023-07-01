import express from 'express'
import { getAllUsers, getUsers, updateUsers } from '../controller/user.js'
import { checkUser } from '../middlewares/checkUsers.js'
const router = express.Router()
router.get('/users', getAllUsers)
router.get('/users/:id', getUsers)
router.patch('/users/:id', checkUser, updateUsers)
export default router
