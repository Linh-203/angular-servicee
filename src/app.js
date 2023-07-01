import mongoose from 'mongoose'
import express from 'express'
import routerProduct from './routers/products.js'
import routerCategory from './routers/categories.js'
import routerAthu from './routers/auth.js'
import routerComment from './routers/comment.js'
import routerCart from './routers/cart.js'
import routerUsers from './routers/users.js'
import routerFavorite from './routers/favorite.js'
import uploadRouter from './routers/upload.js'
import cors from 'cors'
const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use('/api', routerProduct)
app.use('/api', routerAthu)
app.use('/api', routerCategory)
app.use('/api', routerComment)
app.use('/api', routerCart)
app.use('/api', routerUsers)
app.use('/api', routerFavorite)
app.use('/api', uploadRouter)
const connectDB = async () => {
   try {
      await mongoose.connect('mongodb+srv://linhvh203:Linhdz112003@angular-service.piuzmiw.mongodb.net/')
      console.log('successfully connected')
   } catch (error) {
      console.log(error)
   }
}
connectDB()
app.listen(8000, () => {
   console.log('listening on port 8000')
})
// export const viteNodeApp = app
