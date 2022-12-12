import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/Index.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.get('/', (req, res) => {
    res.send('Hello to Yoga-Hub API');
  });
 
app.use(cors());
app.use(express.json());
app.use('/users', productRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));