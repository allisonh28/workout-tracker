import { useState } from 'react';
import axios from '../api/axios';
import { Workout } from '../types/Workout';

const initialState: Workout = {
  name: '',
  sets: 0,
  reps: 0,
  weight: 0,
  duration: 0,
};

export default function WorkoutForm() {
  const [formData, setFormData] = useState<Workout>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'name' ? value : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/workouts', formData);
      setFormData(initialState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Exercise Name" required />
      <input name="sets" type="number" value={formData.sets} onChange={handleChange} placeholder="Sets" />
      <input name="reps" type="number" value={formData.reps} onChange={handleChange} placeholder="Reps" />
      <input name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="Weight (kg)" />
      <input name="duration" type="number" value={formData.duration} onChange={handleChange} placeholder="Duration (min)" />
      <button type="submit">Submit</button>
    </form>
  );
}
