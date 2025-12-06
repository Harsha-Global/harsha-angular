import { ClientLocation } from './client-location';

export class Project
{
    projectID: number;
    projectName: string;
    dateOfStart: string;
    teamSize: number;
    active: boolean;
    status: string;
    clientLocationID: number;
    clientLocation: ClientLocation;

    constructor()
    {
        this.projectID = null;
        this.projectName = null;
        this.dateOfStart = null;
        this.teamSize = null;
        this.active = true;
        this.status = null;
        this.clientLocationID = null;
        this.clientLocation = new ClientLocation();
    }
}
