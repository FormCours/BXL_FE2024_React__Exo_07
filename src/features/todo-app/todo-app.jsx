import { nanoid } from "nanoid";
import TaskForm from "../../components/task-form/task-form";
import TaskList from "../../components/task-list/task-list";
import { useState } from "react";

export default function TodoApp() {

    const [tasks, setTasks] = useState([]);

    const handleAddTask = (data) => {
        const task = {
            id: nanoid(),
            name: data.name,
            desc: data.desc,
            priority: data.priority,
            isDone: false

        };
        setTasks(prevTask => [...prevTask, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks(prevTask => prevTask.filter((element) => element.id !== id));
    };

    const handleOnEndTask = (id) => {
        setTasks(preview =>
            preview.map((theTask) =>
                theTask.id === id ? { ...theTask, isDone: true } : theTask
            )
        );
    };
    return (
        <div>
            <h2>Ajouter une tache</h2>
            <TaskForm onSubmitCallback={handleAddTask} />

            <h2>Liste des taches</h2>
            <TaskList tasks={tasks} onDeleteCallback={handleDeleteTask} onEndCallback={handleOnEndTask} />
        </div>
    );
} 