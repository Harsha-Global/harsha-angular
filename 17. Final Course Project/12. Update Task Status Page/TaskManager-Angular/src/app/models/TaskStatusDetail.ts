import { TaskStatus } from './task-status';

export class TaskStatusDetail
{
    taskStatusDetailID: number;
    taskID: number;
    taskStatusID: number;
    userID: string;
    description: string;
    taskstatus: TaskStatus;
    user: any;
    statsUpdationDateTimeString: string;

    constructor()
    {
        this.taskStatusDetailID = null;
        this.taskID = null;
        this.taskStatusID = null;
        this.description = null;
        this.userID = null;
        this.taskstatus = null;
        this.user = null;
        this.statsUpdationDateTimeString = null;
    }
}