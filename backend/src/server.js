import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: "*",
}))
app.use(express.json())
app.use("/products", productRoutes)

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started");
  });
});