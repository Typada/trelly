import {TasksList} from "./ui/TasksList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import styles from './MainPage.module.css'
import {useTaskSelection} from "./useTaskSelection.tsx";

export function MainPage() {
    const {selectedTaskId, setSelectedTaskId} = useTaskSelection();

    return (
        <div>
            <div className={styles.wrapper}>
                <TasksList
                    setTaskId={setSelectedTaskId}
                    taskId={selectedTaskId}
                />
                <TaskDetails
                    taskId={selectedTaskId}
                />
            </div>
        </div>
    )
}