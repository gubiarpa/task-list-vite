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
        <div className='container'>
            <div>
                <AddOrUpdateTask addTask={addTask} />
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Item</th>
                        <th scope='col'>Value</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <ListTasks tasks={tasks} />
            </table>
        </div>
    );
}

export default App
