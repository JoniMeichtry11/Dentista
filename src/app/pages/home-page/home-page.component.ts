import { Component } from '@angular/core';
import { ServiceSectionComponent, WelcomeComponent } from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [WelcomeComponent, ServiceSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
