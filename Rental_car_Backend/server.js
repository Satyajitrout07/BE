import express from 'express';

import dotenv from "dotenv";
import cors from 'cors';
import userRouter from './routes/userRoutes.js';



dotenv.config();

import connectDB from './config/db.js';

// connect to database
connectDB();


// express app
const app = express();



//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


