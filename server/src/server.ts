import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import workoutRoutes from './routes/workoutRoutes';
import wgerRoutes from './routes/wgerRoutes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

console.log('Workout Routes:', workoutRoutes);


app.use('/api/workouts', workoutRoutes);
app.use('/api/wger', wgerRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));
