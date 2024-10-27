import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import { UserDetailsComponent } from '../user-details/user-details.component'; 
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule, 
    UserDetailsComponent,
    FormsModule
  ],
  templateUrl: './user.component.html',
})
export class UserComponent {
  public users: User[] = [];
  public loading = true;
  public error = false;

  public currentPage = 1;
  public usersPerPage = 20;

  public selectedUserId: string | null = null;
  public searchTerm: string | null = null;

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

  filterUsers(){
    this.fetchRandomUsers();

    if(this.searchTerm){
      const term = this.searchTerm.toLowerCase();
      
      const filteredUsers = this.users.filter(user =>
        user.name.first.toLowerCase().includes(term) ||
        user.name.last.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.location.country.toLowerCase().includes(term)
      );
      
      this.users = filteredUsers;
      
    }
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
