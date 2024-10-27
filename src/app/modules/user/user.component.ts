import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { UserDetailsComponent } from '../user-details/user-details.component'; 
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule, UserDetailsComponent],
  templateUrl: './user.component.html',
})
export class UserComponent {
  public users: User[] = [];
  public loading = true;
  public error = false;

  public currentPage = 1;
  public usersPerPage = 20;

  public selectedUserId: string | null = null;

  constructor(private readonly userService: UserService) {
    this.loading = true;
    this.fetchRandomUsers();
    this.loading = false;
  }


  fetchRandomUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.usersPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }


  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  showDetails(user: User) {
    this.selectedUserId = user.login.uuid;
  }
  
  closeDetails() {
    this.selectedUserId = null;
  }
}
