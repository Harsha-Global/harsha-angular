import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "./project";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>("http://localhost:3000/projects", {
      responseType: "json",
    });
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      "http://localhost:3000/projects",
      newProject,
      { responseType: "json" }
    );
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      "http://localhost:3000/projects/" + existingProject.projectID,
      existingProject,
      { responseType: "json" }
    );
  }

  deleteProject(ProjectID: number): Observable<string> {
    return this.httpClient.delete<string>(
      "http://localhost:3000/projects/" + ProjectID
    );
  }
}
