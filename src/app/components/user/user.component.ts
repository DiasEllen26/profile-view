import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-random-user',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user.component.html', 
})
export class RandomUserComponent {
  users: any[] = [];
  loading = true;
  error = false;

  constructor(private http: HttpClient) {
    this.fetchRandomUsers();
  }

  fetchRandomUsers() {
    this.http.get('{$apiUrl}')
      .subscribe({
        next: (response: any) => {
          this.users = response.results;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        }
      });
  }

}
