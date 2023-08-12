import userRoutes from './routes/userRoutes.js'
import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';


const app=express();
dotenv.config()

connectDB();


app.use('/api/users',userRoutes)
app.get('/',(req,res)=>res.send('server is running'));



app.use(notFound)
app.use(errorHandler)

const PORT =process.env.PORT||8000
app.listen(PORT,()=>console.log(`PORT is running on ${PORT}`))
 