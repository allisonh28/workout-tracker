import { Request, Response } from 'express';
import Workout from '../models/Workout';

export const getWorkouts = async (req: Request, res: Response) => {
  const workouts = await Workout.find().sort({ createdAt: -1 });
  res.json(workouts);
};

export const createWorkout = async (req: Request, res: Response) => {
  const newWorkout = await Workout.create(req.body);
  res.status(201).json(newWorkout);
};

export const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Workout.findByIdAndDelete(id);
  res.sendStatus(204);
};
