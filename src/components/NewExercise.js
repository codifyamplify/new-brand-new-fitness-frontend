import React, {useState} from 'react'

function NewExercise({onAddExercise}){
    // create new exercise state
    const [newExerciseData, setNewExerciseData] = useState({
        name: "",
        muscle_group: "",
        weight: "",
        sets: "",
        reps: "",
        rest: "",
        user_id: ""
    })

    // write and abstract change handler to update newExerciseData state as user types
    function handleChange(e){
        setNewExerciseData({
            ...newExerciseData, [e.target.id]: e.target.value
        });
        console.log(newExerciseData)
    }

    // write handle submit function and include a post fetch to 9292/exercises
    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/exercises", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newExerciseData),
        })
        .then((response) => response.json())
        .then((newExerciseData) => {
            onAddExercise(newExerciseData)
            // setNewExerciseData("")
            console.log(newExerciseData)
        })
    }
    return(
        <div>
            <h3>Add New Exercise</h3>
            <form onSubmit={handleSubmit}>
                {/* <input 
                    type="text"
                    name="newExerciseData"
                    value={newExerciseData}
                    onChange={(e) => setNewExerciseData(e.target.value)}
                /> */}
                <label>
                    Name:
                <input
                    type="text"
                    id="name"
                    // defaultValue="name"
                    value={newExerciseData.name}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Muscle Group:
                <input
                    type="text"
                    id="muscle_group"
                    value={newExerciseData.muscle_group}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Weight:
                <input
                    type="integer"
                    id="weight"
                    value={newExerciseData.weight}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Sets:
                <input
                    type="integer"
                    id="sets"
                    value={newExerciseData.sets}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Reps:
                <input
                    type="integer"
                    id="reps"
                    value={newExerciseData.reps}
                    onChange={handleChange}
                />
                </label>
                <label>
                    Rest:
                <input
                    type="text"
                    id="rest"
                    value={newExerciseData.rest}
                    onChange={handleChange}
                />
                </label>
                <label>
                    User Id:
                <input
                    type="integer"
                    id="user_id"
                    value={newExerciseData.user_id}
                    onChange={handleChange}
                />
                </label>
                <button type="submit">Submit New Exercise</button>
            </form>
        </div>
    )
}

export default NewExercise