import { Component, OnInit } from '@angular/core';
import { RandomUser, RandomUserService } from '../../services/user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
})
export class RandomUserComponent implements OnInit {
  user!: RandomUser;  
  constructor(private randomUserService: RandomUserService) {}
  
  // Busca o usuário da API ao iniciar o componente
  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe((data) => {
      this.user = data; 
    });
  }
}
