import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express();
app.use(cors()) ;
app.use(express.json()) ;

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.json({
        msg:"hello from ther server"
    });
    
})

app.listen(PORT,()=>{
console.log(`Server is running on http://localhost:${PORT}` );

})