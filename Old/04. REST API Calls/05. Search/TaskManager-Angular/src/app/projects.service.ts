import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService
{
  urlPrefix: string = "http://localhost:9090"; //make this as empty ("") if you are using asp.net core [without CORS]

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.urlPrefix + '/api/projects', {
      responseType: 'json',
    });
  }

  insertProject(newProject: Project): Observable<Project>
  {
    return this.httpClient.post<Project>(this.urlPrefix + '/api/projects', newProject, {
      responseType: 'json',
    });
  }

  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>(this.urlPrefix + '/api/projects', existingProject, {
      responseType: 'json',
    });
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(
      this.urlPrefix + '/api/projects?ProjectID=' + ProjectID
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      this.urlPrefix + '/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}
