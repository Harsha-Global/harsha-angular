import { Project } from './project';

export class Task
{
    taskID: number;
    taskName: string;
    description: string;
    createdOn: string;
    projectID: number;
    createdBy: string;
    assignedTo: string;
    taskPriorityID: number;
    lastUpdatedOn: number;
    currentStatus: number;
    currentTaskStatusID: number;

    project: Project;
    createdByUser: any;
    assignedToUser: any;
    taskStatusDetails: any;

    constructor()
    {
        this.taskID = null;
        this.taskName = null;
        this.description = null;
        this.createdOn = null;
        this.projectID = null;
        this.createdBy = null;
        this.assignedTo = null;
        this.taskPriorityID = null;
        this.lastUpdatedOn = null;
        this.currentStatus = null;

        this.project = null;
        this.createdByUser = null;
        this.assignedToUser = null;
        this.taskStatusDetails = null;
        this.taskStatusDetails = null;
        this.currentTaskStatusID = null;
    }
}
