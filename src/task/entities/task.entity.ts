export class Task {
    id: string;
    userId: string;
    title: string;
    description: string;
    status: taskStatus;
    createdAt: Date
    updatedAt: Date
}

export enum taskStatus {
    "PENDING",
    "IN_PROGRESS",
    "COMPLETED"
}
