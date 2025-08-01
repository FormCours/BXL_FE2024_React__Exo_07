import TaskForm from "../../components/task-form/task-form";
import TaskList from "../../components/task-list/task-list";
import { useCollectionState } from "../../hooks/collection-state.hook";

export default function TodoApp() {

    const [tasks, actionTasks] = useCollectionState();

    const handleAddTask = (data) => {
        const task = {
            name: data.name,
            desc: data.desc,
            priority: data.priority,
            isDone: false
        };
        actionTasks.add(task);
    };

    const handleOnEndTask = (id) => {
        actionTasks.modify(id, (task) => ({ ...task, isDone: true }));
    };

    const handleRemoveDoneTask = () => {
        actionTasks.removeIf(task => !task.isDone);
    }

    return (
        <div>
            <h2>Ajouter une tache</h2>
            <TaskForm onSubmitCallback={handleAddTask} />

            <h2>Liste des taches</h2>
            <button onClick={actionTasks.clear}>Effacer tout</button>
            <button onClick={handleRemoveDoneTask}>Effacer les taches terminées</button>
            <TaskList tasks={tasks}
                onDeleteCallback={actionTasks.remove}
                onEndCallback={handleOnEndTask} />
        </div>
    );
} 