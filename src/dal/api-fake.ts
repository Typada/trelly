type GetTaskOutput = {
    data: TaskDetailsData
}

export type GlobalTaskListResponse = {
    data: GlobalTaskListItemData[] // <-- используем тип элемента списка, а не детальной задачи
}

// Тип для ОДНОЙ задачи в списке (getTasksList)
export type GlobalTaskListItemData = {
    id: string
    type: string
    attributes: GlobalTaskListItemAttributes
}

export type GlobalTaskListItemAttributes = {
    title: string
    status: number
    priority: number
    addedAt: string
    attachmentsCount: number
}

// Тип для ДЕТАЛЬНОЙ задачи (getTaskDetail)
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
    console.log('getTaskDetail', taskId)
    const promise: Promise<GetTaskOutput> = Promise.resolve({
        "data": {
            "id": "2ed41824-c10e-4588-9718-e8f67ad22378",
            "type": "tasks",
            "attributes": {
                "title": "Task33",
                "description": null,
                "order": -3,
                "status": 0,
                "priority": 1,
                "startDate": null,
                "deadline": null,
                "addedAt": "2026-11-17T19:45:14.340Z",
                "updatedAt": "2026-11-17T19:45:14.340Z",
                "attachments": []
            },
            "relationships": {
                "board": {
                    "data": {
                        "id": "d3d8a3b0-df43-46df-af96-338f1997fabe",
                        "type": "boards"
                    }
                }
            }
        },
        "included": [
            {
                "id": "d3d8a3b0-df43-46df-af96-338f1997fabe",
                "type": "boards",
                "attributes": {
                    "title": "Todo3"
                }
            }
        ]
    })
    return promise;
}
export const getTasksList = () => {
    const promise: Promise<GlobalTaskListResponse> = Promise.resolve({
        data: [
            {
                "id": "2ed41824-c10e-4588-9718-e8f67ad22378",
                "type": "tasks",
                "attributes": {
                    "title": "Task33",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:45:14.340Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "d3d8a3b0-df43-46df-af96-338f1997fabe",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "6eee17a7-faa1-44b6-80d3-1d519705ff6b",
                "type": "tasks",
                "attributes": {
                    "title": "Task32",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:45:08.255Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "d3d8a3b0-df43-46df-af96-338f1997fabe",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "71949d81-e93e-431c-817e-ef3e78fe08bc",
                "type": "tasks",
                "attributes": {
                    "title": "Task31",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:44:59.045Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "d3d8a3b0-df43-46df-af96-338f1997fabe",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "491d12bc-70e1-4c84-8f68-7d3ef899e0d5",
                "type": "tasks",
                "attributes": {
                    "title": "Task3",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:33:04.245Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "e1dcb35c-bb84-47ff-ad01-c3cd3eb26158",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "b5ee8cf3-3f68-4b0b-bbf1-16184dd04869",
                "type": "tasks",
                "attributes": {
                    "title": "Task2",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:32:56.861Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "9ce63aac-5fe4-472e-8138-c3ce4c3caa6a",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "dcb39c6c-bed0-4a69-9054-d23378a58c55",
                "type": "tasks",
                "attributes": {
                    "title": "Task1",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T19:32:45.262Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "9ce63aac-5fe4-472e-8138-c3ce4c3caa6a",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "add7f8bf-fe2e-4203-a812-2a0bad35ee83",
                "type": "tasks",
                "attributes": {
                    "title": "rr",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T16:09:38.668Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "7d0e7bdf-14d4-4738-85ae-6852962abe0d",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "a0c2ada3-d8e0-450d-84fa-7993752688d5",
                "type": "tasks",
                "attributes": {
                    "title": "f",
                    "status": 0,
                    "priority": 1,
                    "addedAt": "2026-11-17T10:54:33.260Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "7d0e7bdf-14d4-4738-85ae-6852962abe0d",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "55a35d9e-b9b8-440b-aa34-95ea941d1e63",
                "type": "tasks",
                "attributes": {
                    "title": "f",
                    "status": 2,
                    "priority": 1,
                    "addedAt": "2026-11-16T23:07:24.912Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "7d0e7bdf-14d4-4738-85ae-6852962abe0d",
                            "type": "boards"
                        }
                    }
                }
            },
            {
                "id": "43130538-14e6-4f71-a971-d8916c7064b3",
                "type": "tasks",
                "attributes": {
                    "title": "df",
                    "status": 2,
                    "priority": 1,
                    "addedAt": "2026-11-16T23:06:19.117Z",
                    "attachmentsCount": 0
                },
                "relationships": {
                    "board": {
                        "data": {
                            "id": "7d0e7bdf-14d4-4738-85ae-6852962abe0d",
                            "type": "boards"
                        }
                    }
                }
            }
        ],
    })

    return promise;
}
