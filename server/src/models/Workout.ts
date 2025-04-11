import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: Number,
  reps: Number,
  weight: Number,
  duration: Number,
}, { timestamps: true });

export default mongoose.model('Workout', workoutSchema);
