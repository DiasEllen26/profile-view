import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user/services/user.service';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import userSchema from './user-details.schema';


@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    HttpClientModule, 
    CommonModule, 
    UserDetailsComponent,
    FormsModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
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
  fillingErrors: Record<string, string> = {};

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

  set formattedDate(value: string) {
    if (this.userDetails) {      
      const completedFieldLength = 8;
      
      if(value.length === completedFieldLength) {
        const day = value.substring(0, 2);
        const month = value.substring(2, 4);
        const year = value.substring(4, 8); 
        
        this.userDetails.dob.date = new Date(+year, +month - 1, +day).toISOString();
      }
    }
  }

  save(): void {
    if(this.userDetails) {
      const validation = userSchema.safeParse(this.userDetails);

      if (!validation.success) {
        this.fillingErrors = {};

        validation.error.errors.forEach((err) => {
          console.log(err.message);
          this.fillingErrors[err.path.join('.')] = err.message;
        });
        
        return;
      }

      this.userService.updateUser(this.userDetails);
      this.closeEvent.emit();
    }  
  }

  close() {
    this.closeEvent.emit();
  }
}
