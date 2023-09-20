import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import connectDb from "./dbConfig.js"
import colors from "colors"
import userRouter from "./routes/user.js";
import formRouter from './routes/form.js'

dotenv.config();

connectDb();

export const app=express();

app.use(express.json())
app.use(cookieParser());

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use("/api/v1",userRouter);
app.use("/api/v1",formRouter);

app.get('/',(req,res)=>{
    res.send('Nice')
})
app.listen(4000,()=>{
    console.log("server is running at port 4000".bgWhite.red.italic.bold);
})