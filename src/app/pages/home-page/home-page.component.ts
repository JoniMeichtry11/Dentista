import { Component } from '@angular/core';
import { WelcomeComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
