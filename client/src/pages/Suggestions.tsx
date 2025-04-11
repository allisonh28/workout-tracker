import { useEffect, useState } from 'react';
import axios from '../api/axios';

interface WgerExercise {
  id: number;
  name: string;
  description: string;
}

export default function Suggestions() {
  const [exercises, setExercises] = useState<WgerExercise[]>([]);

  useEffect(() => {
    axios.get('/wger/exercises').then(res => setExercises(res.data.results));
  }, []);

  return (
    <div>
      <h1>Suggestions</h1>
      {exercises.map(e => (
        <div key={e.id}>
          <h2>{e.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: e.description }} />
        </div>
      ))}
    </div>
  );
}
