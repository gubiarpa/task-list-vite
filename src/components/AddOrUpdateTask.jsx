import React, { useEffect, useState } from "react";
import { OneTask } from "./OneTask";

export const AddOrUpdateTask = ({ addTask = () => {} }) => {

    const [newTask, setNewTask] = useState('');

    const handleClick = () => {
        if (newTask !== '') {
            addTask(newTask);
            setNewTask('');
        }
    }
    
    const handleChange = (e) => {
        setNewTask(e.target.value);
    }
    
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            if (newTask !== '') {
                addTask(newTask);
                setNewTask('');
            }
        }
    }

    return (
        <div className="input-group">
            <input className="form-control" type="text" name="New Task" id="txtNewTask" value={newTask} onChange={handleChange} onKeyUp={handleKeyUp} />
            <button className="btn btn-outline-primary" onClick={handleClick}>Add</button>
        </div>
    );
}
