import express from 'express';
import { getWorkouts, createWorkout, deleteWorkout } from '../controllers/workoutController';

const router = express.Router();

router.get('/', getWorkouts);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);

export default router;
