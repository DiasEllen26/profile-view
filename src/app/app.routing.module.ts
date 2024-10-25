import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'random-user', component: RandomUserComponent }, 
  { path: '', redirectTo: '/random-user', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
