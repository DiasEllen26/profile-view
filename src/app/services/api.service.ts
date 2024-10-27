import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root', 
})
export class ApiService {
  private readonly apiUrl = 'https://randomuser.me/api';

  constructor(private readonly http: HttpClient) {}

  fetchUsers(limit = 100): Observable<{ results: User[] }> {
    const urlToFetchUsers = `${this.apiUrl}?results=${limit}`;
    
    return this.http.get<{ results: User[] }>(urlToFetchUsers);
  }
  
}
