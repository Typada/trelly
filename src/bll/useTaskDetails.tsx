import {useEffect, useState} from "react";
import {getTaskDetail, type TaskDetailsData} from "../dal/api-fake.ts";

export function useTaskDetails(taskId: string | null) {
    const [tasksDetails, setTaskDetails] = useState<TaskDetailsData | null>(null);

    useEffect(() => {
        getTaskDetail(taskId)
            .then(json => setTaskDetails(json.data))
    }, [taskId])

    return {tasksDetails};
}