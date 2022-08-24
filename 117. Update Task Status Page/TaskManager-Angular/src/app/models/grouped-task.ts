import { Task } from './task';

export class GroupedTask
{
    taskStatusName: number;
    tasks: Task[];

    constructor()
    {
        this.taskStatusName = null;
        this.tasks = null;
    }
}

