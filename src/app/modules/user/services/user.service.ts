import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';
import { ApiService } from '../../../services/api.service';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userCacheKey = 'users';

  constructor(private readonly apiService: ApiService) {}

  getUsers(): Observable<User[]> {
    const usersCached = sessionStorage.getItem(this.userCacheKey);

    if(usersCached) {
      const usersParsed = JSON.parse(usersCached!) as User[];
    
      return of(usersParsed);
    }

    return this.apiService.fetchUsers().pipe(
      map(response => response.results),
      tap(users => {
        const usersJSON = JSON.stringify(users);
        sessionStorage.setItem(this.userCacheKey, usersJSON);
      })
    );
  }

  getUserById(id: string): User | undefined {
    const usersCached = sessionStorage.getItem(this.userCacheKey);

    if(usersCached) {
      const usersParsed = JSON.parse(usersCached!) as User[];

      const user = usersParsed.find(user => user.login.uuid === id);
 
      return user;      
    }

    return undefined;
  }

  updateUser(user: User): void {
    const usersCached = sessionStorage.getItem(this.userCacheKey);

    if(usersCached) {
      const usersParsed = JSON.parse(usersCached!) as User[];

      const userIndex = usersParsed.findIndex(u => u.login.uuid === user.login.uuid);

      const userHasFound = userIndex !== -1;

      if(userHasFound) {
        usersParsed[userIndex] = user;
        
        const usersJSON = JSON.stringify(usersParsed);
        
        sessionStorage.setItem(this.userCacheKey, usersJSON);
      }
    }
  }
}
