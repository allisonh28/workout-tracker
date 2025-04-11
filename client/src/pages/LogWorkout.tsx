import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';

export default function LogWorkout() {
  return (
    <div>
      <h1>Log a Workout</h1>
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
}
