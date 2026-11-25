import {useState} from "react";

export function useTaskSelection() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

    return {selectedTaskId, setSelectedTaskId};
}