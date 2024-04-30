import express from 'express';
import cors from 'cors';
import connectDB from './DBConnection/DB.js';
import web from './routes/web.js';
const app = express()
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE_URL


//Middlewares
app.use(express.json());
app.use(cors());

// Connect Database
connectDB(DATABASE)


app.get("/",(req,res)=>{
        res.send("hii")
})

// load routes
app.use("/api",web)

app.listen(PORT,()=>{
    console.log("Server is listning at Port http://localhost:3000");
})