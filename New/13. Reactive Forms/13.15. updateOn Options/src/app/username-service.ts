import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService
{
  constructor(private http: HttpClient)
  {
  }

  checkAvailability(username: string): Observable<{available: boolean}>
  {
    return this.http.get<{available: boolean}>(`http://localhost:3000/api/check-username?username=${username}`);
  }
}
