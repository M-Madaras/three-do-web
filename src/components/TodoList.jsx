import { useEffect } from "react"

export default function TodoList({ tasklist, setTasklist }) {
     // always squid games ur use effects
    useEffect(()=> {
        fetch('https://three-do-api-mtm.web.app/tasks')
        .then(results => results.json())
        .then(tasks => setTasklist(tasks))
        .catch(console.error)
    }, [setTasklist]);
    if (!tasklist) {
        return <h2>No Task to Complete!</h2>
    }
    return(
        <ul>
            {tasklist.map(task => (
                <li key={task.id}>
                    {task.task}
                    </li>
            ))}
        </ul>
    )
}