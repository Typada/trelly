import {useEffect, useState} from "react";
import {getTasksList, type GlobalTaskListItemData} from "../dal/api-fake.ts";

export function useTasks() {
    const [tasks, setTasks] = useState<GlobalTaskListItemData[] | null>(null);

    useEffect(() => {
        getTasksList()
            .then(json => setTasks(json.data))
    }, [])


    return {
        tasks
    }
}