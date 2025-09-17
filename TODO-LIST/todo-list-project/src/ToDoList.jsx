import { useState } from 'react'
function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfirst", "Go Lunch", "Study"]);
    const [task, setTask] = useState("");

    const handleTaskInput = (event) => {
        setTask(t => t = event.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() !== "") {
            setTasks(T => [...T, task]);
            setTask(t => t = '');
        }
    };

    function handleTaskDelete(index) {
        setTasks(T => T.filter((_, i) => i !== index));
    }

    const handleMoveTaskUp = (index) =>{
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const handleMoveTaskDown = function (index) {
        if (index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-div">
            <h2 style={{ color: "white", fontWeight: "bold", textAlign: "center", fontFamily: ["arial", "san-serif"] }}>To-Do-List</h2>
            <div className="input-div">
                <input type="text" placeholder="Enter a task..." value={task} onChange={handleTaskInput} id='task-input' required />
                <button onClick={handleAddTask} type='submit'>Add</button>
            </div>
            <div className="wrapper">
                {tasks.map((taskValue, index) => <div className='task' key={index}>
                    <p>{taskValue}</p>
                    <div className="controls">
                        <button id='delete' onClick={() => handleTaskDelete(index)}>Delete</button>
                        <button id='up' onClick={() => handleMoveTaskUp(index)}>👆</button>
                        <button id='down' onClick={() => handleMoveTaskDown(index)}>👇</button>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default ToDoList;