import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { User } from '../../models/user.model';

@Component({
  selector: 'app-random-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user.component.html', 
})
export class RandomUserComponent {
  users: User[] = [];
  loading = true;
  error = false;

  currentPage = 1;
  usersPerPage = 20;


  constructor(private http: HttpClient) {
    this.fetchRandomUsers();
  }

  fetchRandomUsers() {
    this.http.get(`https://randomuser.me/api/?results=200`)
      .subscribe({
        next: (response: any) => {
          this.users = response.results.map((user: User) => ({
            name: user.name,
            email: user.email,
            phone: user.phone,
            location: user.location,
            picture: user.picture
          }));
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
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
}
