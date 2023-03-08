import React, {useState, useEffect} from 'react'
import '../App.css';
// import UserCard from './UserCard';
import UsersList from './UsersList';
import NewUser from './NewUser';
import ExercisesList from './ExercisesList';
import NewExercise from './NewExercise';

function App() {
  // create STATES
  const [users, setUsers] = useState([])
  const [exercisesState, setExercisesState] = useState([])
  
  // fetch GETs for state
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
    }, [])

  useEffect(() => {
    fetch("http://localhost:9292/exercises")
      .then((response) => response.json())
      .then((exercisesState) => setExercisesState(exercisesState));
  }, [])

  // build HANDLERs for state updates

    // write state setter to filter users array upon user deletion, start with a console.log
    function handleDeleteUser(id){
      console.log(`I am in App, in handleDeleteUser, with an id of ${id}`)
      // write actual state setter, filter users state
      const usersAfterDelete = users.filter((user) => user.id !== id)
      setUsers(usersAfterDelete)
    }

    function handleDeleteExercise(id){
      // setExercisesState(exercisesAfterDelete)
      console.log(`I am in App.js, in handleDeleteExercise, with an ID of ${id}`)
      // write exercises filtering then set state
      const exercisesAfterDelete = exercisesState.filter((exerciseState) => exerciseState.id !== id)
      setExercisesState(exercisesAfterDelete)
    }

    function handleAddUser(newUserName){
      // console.log("im adding a new new user")
      setUsers([...users, newUserName])
    }

    function handleAddExercise(newExerciseName){
      setExercisesState([...exercisesState, newExerciseName])
    }
    

const boop = 4
// console.log("filter attempt")
    // EXPERIMENTS
    // console.log(
    //   exercisesState.filter((exerciseState) => exerciseState.user_id === boop)
    //   )

    // const filteredExercises = exercisesState.filter((exerciseState) =>
    //   exerciseState.user_id === boop
    // )

    // console.log("filter in app")
    // console.log(filteredExercises)
  return (
    <div className="App">
      {/* className="App-header" for dark blue background */}
      <h1>Brand New Fitness App</h1>
      <NewUser onAddUser={handleAddUser}/>
      <NewExercise onAddExercise={handleAddExercise}/>
      <UsersList 
        users={users}
        onDeleteUser={handleDeleteUser}
        onDeleteExercise={handleDeleteExercise}
        exercisesState={exercisesState}
      />
      <ExercisesList 
        users={users}
        exercisesState={exercisesState}
        onDeleteExercise={handleDeleteExercise}
      />
    </div>
  );
}

export default App;
