import express from 'express'
import { create, get, getAll, update, remove, getAllByPrice } from '../controller/products.js'
import { checkPermission } from '../middlewares/checkPerssion.js'

const router = express.Router()
router.get('/products', getAll)
router.get('/products/:id', get)
router.patch('/products/:id', checkPermission, update)
router.post('/products', checkPermission, create)
router.delete('/products/:id', checkPermission, remove)
router.get('/products-price-range', getAllByPrice)
export default router
