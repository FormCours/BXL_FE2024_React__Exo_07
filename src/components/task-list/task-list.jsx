import { priorities } from "../../values/priority";
import styles from "./task-list.module.css";

function TaskCard({ name, desc, priority, id, isDone, onDelete = () => { }, onEnd = () => { } }) {

    const priorityName = priorities.find((element) => element.key == priority).name;

    return (
     // <div className={`${styles.task} ${(isDone) ? styles.done : ""}`}>
        <div className={styles.task + ' ' + ((isDone) ? styles.done : "")}>
            <p>{name} ({priorityName})</p>
            <p>{desc}</p>
            <button onClick={() => onDelete(id)}>Supprimer</button>
            <button onClick={() => onEnd(id)} disabled={isDone} >Terminer</button>
        </div>
    );
}


export default function TaskList({ tasks, onDeleteCallback, onEndCallback }) {

    return (
        <div>
            {tasks.map(element => (
                <TaskCard {...element} key={element.id} onDelete={onDeleteCallback} onEnd={onEndCallback} />
            ))}
        </div>
    );
} 