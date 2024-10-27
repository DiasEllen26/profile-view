import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/services/user.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule, 
    UserDetailsComponent,
    FormsModule 
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input()  userId: string | null = null; 
  @Output() closeEvent = new EventEmitter<void>()
  userDetails: User | null = null; 
  loading: boolean = false; 
  error: boolean = false; 

  constructor(private readonly userService: UserService) {}


  ngOnChanges(): void {
    if (this.userId) {
      this.fetchUserDetails(this.userId);
    }
  }
  fetchUserDetails(id: string): void {
    this.loading = true;
    this.error = false;

    const user = this.userService.getUserById(id);

    this.loading = false;

    if (user) {
      this.userDetails = user;
      return;
    }

    this.userDetails = null;
    this.error = true;
  }

  get formattedDate(): string {
    return this.userDetails?.dob?.date 
      ? new Date(this.userDetails.dob.date).toLocaleDateString('pt-BR') 
      : '';
  }

  close() {
    this.closeEvent.emit();
  }
}
