import userRoutes from './routes/userRoutes.js'
import express from 'express';
import dotenv from 'dotenv'

const app=express();
dotenv.config()



app.use('/api/users',userRoutes)
app.get('/',(req,res)=>res.send('server is running'));




const PORT =process.env.PORT||8000
app.listen(PORT,()=>console.log(`PORT is running on ${PORT}`))
 