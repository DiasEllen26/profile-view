import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule {}
