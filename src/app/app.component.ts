import { afterRender, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  public title = 'profileview';
  public theme: string = 'light';

  private readonly daisyUIThemeMapper: Record<string, string> = {
    'light': 'light',
    'dark': 'dark'
  }
  
  constructor(){
    afterRender(() => {
      this.theme = localStorage.getItem('theme') || 'light';
    
      this.applyTheme();    
    })
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.daisyUIThemeMapper[this.theme]);
  }

}
