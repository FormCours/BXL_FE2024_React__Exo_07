

function TaskCard({name, desc, priority, id, onDelete = () => {}, onEnd = () => {}}) {

    return (
        <div>
            <p>{name} ({priority})</p>
            <p>{desc}</p>
            <button onClick = {() => onDelete(id)}>Supprimer</button>
            <button onClick = {() => onEnd(id)}>Terminer</button>
        </div>
    )
}


export default function TaskList({tasks, onDeleteCallback, onEndCallback}) {

    return (
        <div>
            {tasks.map(element => (
                <TaskCard {...element} key={element.id} onDelete={onDeleteCallback} onEnd={onEndCallback}/>
            ))}
        </div>
    )
} 