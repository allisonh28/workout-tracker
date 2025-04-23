import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Workout } from '../types/Workout';

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    axios.get('/workouts').then(res => setWorkouts(res.data));
  }, []);

  const handleDelete = async (id?: string) => {
    if (!id) return;
    await axios.delete(`/workouts/${id}`);
    setWorkouts(prev => prev.filter(w => w._id !== id));
  };

  return (
    <div>
        
      {workouts.map(w => (
        <div key={w._id}>
          <p><strong>{w.name}</strong></p>
          <p>{w.sets} sets x {w.reps} reps</p>
          <p>{w.weight} kg, {w.duration} min</p>
          <button onClick={() => handleDelete(w._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
