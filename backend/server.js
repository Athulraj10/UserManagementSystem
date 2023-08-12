import userRoutes from './routes/userRoutes.js'
import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app=express();
dotenv.config()



app.use('/api/users',userRoutes)
app.get('/',(req,res)=>res.send('server is running'));



app.use(notFound)
app.use(errorHandler)

const PORT =process.env.PORT||8000
app.listen(PORT,()=>console.log(`PORT is running on ${PORT}`))
 