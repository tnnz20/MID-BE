import 'dotenv/config'

import mongoose from 'mongoose';
import express from 'express';

import CustomError from "./utils/CustomError.js"
import ErrorController from './controllers/ErrorController.js';

import ProductRouter from './routes/ProductRouter.js';
import VideoRouter from './routes/VideoRouter.js'

const app = express()
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DATABASE_URL

app.use(express.json())

mongoose.connect(DB_URL)
const db = mongoose.connection

db.on('error', err => console.log(err))
db.once('connected', ()=> console.log('Database Connected'))


// Router
app.use('/', VideoRouter)
app.use('/product', ProductRouter)
app.use('/comment', CommentRouter)

app.use('*', (req, _, next)=>{
    const err = new CustomError(`Cant't find ${req.originalUrl} on the server!`, 404)
    next(err)
})

// Middleware Error
app.use(ErrorController)

app.listen(PORT, ()=> console.log(`Server is running on PORT http://localhost:${PORT}`))

