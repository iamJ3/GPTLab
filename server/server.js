import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware,requireAuth } from '@clerk/express'
import aiRouter from './routes/ai.routes.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/user.routes.js';

const app = express();
await connectCloudinary();

import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gpt-lab.vercel.app",
    ],
    credentials: true,
  })
);

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
app.use('/api/user',userRouter);

app.listen(PORT,()=>{
console.log(`Server is running on http://localhost:${PORT}` );
})