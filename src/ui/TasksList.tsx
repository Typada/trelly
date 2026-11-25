import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.tsx";

type Props = {
    setTaskId: (id: string | null) => void
    taskId: string | null
}


export function TasksList({setTaskId, taskId}: Props) {
    const {tasks} = useTasks();

    if (tasks === null) {
        return (
            <div>Loading...</div>
        )
    }

    const reset = () => {
        setTaskId(null)
    }


    return (
        <div>
            <button onClick={reset}>
                reset
            </button>
            <div className="card-cont">
                <h2 className="list">List</h2>

                {
                    tasks?.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                setTaskId={setTaskId}
                                isSelected={task.id === taskId}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

