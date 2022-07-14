import { useState } from 'react';
import './App.css'
import { AddOrUpdateTask } from './components/AddOrUpdateTask';
import { ListTasks } from './components/ListTasks';

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        const newId = tasks.length + 1;
        setTasks([...tasks, { id: newId, name: newTask }]);
    }

    return (
        <>
            <div>
                <AddOrUpdateTask addTask={addTask} />
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Value</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <ListTasks tasks={tasks} />
            </table>
        </>
    );
}

export default App
