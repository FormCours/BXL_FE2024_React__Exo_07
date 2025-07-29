import TaskForm from "../../components/task-form/task-form";
import TaskList from "../../components/task-list/task-list";

export default function TodoApp() {

    return (
        <div>
            <h2>Ajouter une tache</h2>
            <TaskForm />

            <h2>Liste des taches</h2>
            <TaskList />
        </div>
    )
} 