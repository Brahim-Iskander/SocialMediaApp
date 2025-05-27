import express from 'express';
import mongoose, { mongo } from 'mongoose';
import User from './models/user.model.js';
import Post from './models/post.model.js';
import router from './routes/user.router.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;
app.use('/users', router);


mongoose.connect(process.env.MongoDB_URI).then(() => {
    console.log('MongoDB connected successfully');
}
).catch((err) => {
    console.error('MongoDB connection error:', err);
}
);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);