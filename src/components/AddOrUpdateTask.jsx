import React, { useState } from "react";
import { OneTask } from "./OneTask";

export const AddOrUpdateTask = ({ addTask = () => {} }) => {

    const [newTask, setNewTask] = useState('');

    const handleClick = () => {
        addTask(newTask);
        setNewTask('');
    }
    
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            addTask(newTask);
            setNewTask('');
        }
    }

    return (
        <>
            <input type="text" name="New Task" id="txtNewTask" value={newTask} onChange={handleChange} onKeyUp={handleKeyUp} />
            <button onClick={handleClick}>Add</button>
        </>
    );
}
