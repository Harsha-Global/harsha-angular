import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient)
  {
  }

  getAllProjects(): Observable<Project[]>
  {
    // var currentUser = { token: "" };
    // var headers = new HttpHeaders();
    // headers = headers.set("Authorization", "Bearer ");
    // if (sessionStorage['currentUser'] != null)
    // {
    //   currentUser = JSON.parse(sessionStorage['currentUser']);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects", { responseType: "json" })
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
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", existingProject, { responseType: "json" });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + ProjectID);
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }
}



