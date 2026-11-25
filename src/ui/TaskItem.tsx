import type {GlobalTaskListItemData} from "../dal/api-fake.ts";
import styles from "./TaskItem.module.css";
import clsx from 'clsx'

type Props = {
    task: GlobalTaskListItemData
    setTaskId: (id: string | null) => void
    isSelected: boolean
}

export function TaskItem({task, setTaskId, isSelected}: Props) {

    const taskClassName = clsx({
        [styles.card]: true,
        [styles._selected]: isSelected,
    })

    const setId = () => {
        setTaskId(task.id)
    }

    return (
        <div key={task.id} className={taskClassName}>
            <button onClick={setId}>
                Select task
            </button>
            <div>
                <div>
                    Task name:
                </div>
                {task.attributes.title}
            </div>
            <span>
                <div>
                  Status
                </div>
                {task.attributes.status}
              </span>
            <p>
                <span>
                  Priority
                </span>
                {task.attributes.priority}
            </p>
        </div>
    )
}