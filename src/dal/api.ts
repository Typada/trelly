export type GetTaskOutput = {
    data: TaskDetailsData
}

export type GlobalTaskListResponse = {
    data: TaskDetailsData[]
}

export type TaskDetailsData = {
    id: string
    type: string
    attributes: TaskDetailsAttributes
}

export type TaskDetailsAttributes = {
    title: string
    description: string | null
    order: number
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    addedAt: string
    updatedAt: string
    attachments: AttachmentDto[]
}

export type AttachmentDto = {
    id: string
    url: string
    contentType: string
    originalName: string
    fileSize: number
    isImage: boolean
    addedAt: string
    images: ImageVariant
}

export type ImageVariant = {
    type: string
    width: number
    height: number
    fileSize: number
    url: string
}

export const getTaskDetail = (taskId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${taskId}/tasks/${taskId}`, {
        headers: {
            'api-key': '601d2171-6069-4daf-9692-461255f1399e'
        }
    }).then(res => res.json())
    return promise;
}

export const getTasksList = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks/', {
        headers: {
            'api-key': '601d2171-6069-4daf-9692-461255f1399e'
        }
    }).then(res => res.json())

    return promise;
}