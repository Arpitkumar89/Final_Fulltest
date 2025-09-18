import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import contactRouter from './routes/contactRoutes.js';  // ✅ use import not require

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
}));

// routes
app.use("/api/contacts", contactRouter);

app.get('/', (req, res) => {
    res.send('Backend Working Fine 👌');
});

// connect database
connectDB();

// start server
app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT}`)
});
