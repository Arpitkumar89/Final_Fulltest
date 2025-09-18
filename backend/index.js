import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
 
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: '*',
}));


app.get('/', (req, res) => {
    res.send('Backend Working Fine 👌');
});

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});