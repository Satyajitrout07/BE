import express from 'express';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';


dotenv.config();

// connect to database
connectDB();


// express app
const app = express();


//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


