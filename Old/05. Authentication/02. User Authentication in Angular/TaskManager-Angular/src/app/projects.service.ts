import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:9090/api/projects", { responseType: "json" })
      .pipe(map(
        (data: Project[]) =>
        {
          for (let i = 0; i < data.length; i++)
          {
            data[i].teamSize = data[i].teamSize * 100;
          }
          return data;
        }
      ));
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>("http://localhost:9090/api/projects", newProject, { responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>("http://localhost:9090/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>("http://localhost:9090/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("http://localhost:9090/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }
}



