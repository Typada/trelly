import {useTaskDetails} from "../bll/useTaskDetails.tsx";
import styles from './TaskDetails.module.css'

type Props = {
    taskId: string | null
}

export function TaskDetails({taskId}: Props) {
    const {tasksDetails} = useTaskDetails(taskId)

    return (
        <div className={styles.details}>
            <h2>Details</h2>

            {
                taskId === null ?
                    'Not selected task' :
                    !tasksDetails || taskId !== tasksDetails?.id ?
                        'loading...' :
                        <div>
                            <div>
                                {
                                    tasksDetails?.attributes.title
                                }
                            </div>
                            <div>
                                <p>date</p>
                                {
                                    tasksDetails?.attributes.addedAt
                                }
                            </div>
                        </div>
            }
        </div>
    )
}