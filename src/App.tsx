import { useState } from 'react';
import './App.css';
import AddTaskForm from "./Components/AddTaskForm.tsx";
import Task from "./Components/Task.tsx";

function App() {

    interface TaskType {
        id: string;
        text: string;
    }

    const [tasks, setTasks] = useState<TaskType[]>([
        { id: "1", text: 'Прогулка по набережной' },
        { id: "2", text: 'Поход в горы' },
        { id: "3", text: 'Отдых дома с родными' }
    ]);

    const deleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const addTask = (taskText: string) => {
        const newTask: TaskType = {
            id: (tasks.length + 1).toString(),
            text: taskText,
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <AddTaskForm onAdd={addTask} />
            {tasks.map((task) => (
                <Task key={task.id} task={task} deleteTask={() => deleteTask(task.id)} />
            ))}
        </>
    );
}

export default App;
