import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware,requireAuth } from '@clerk/express'
import aiRouter from './routes/ai.routes.js';
import connectCloudinary from './config/cloudinary.js';

const app = express();
await connectCloudinary();

app.use(cors()) ;
app.use(express.json()) ;
app.use(clerkMiddleware()) ;

const PORT = process.env.PORT || 8000;

// Public route - NO auth required
app.get('/',(req,res)=>{
  res.send('Welcome to the AI SaaS Application!');
});

// Protected routes - auth required
app.use(requireAuth());
app.use('/api/ai',aiRouter);

app.listen(PORT,()=>{
console.log(`Server is running on http://localhost:${PORT}` );
//ai saaas pern app greatstack
})