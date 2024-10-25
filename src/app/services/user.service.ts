import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RandomUser {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
    };
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private apiUrl = 'https://randomuser.me/api/'; 

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUser>(this.apiUrl);
  }
}
