import { Component } from '@angular/core';
import { SwiperCarouselComponent } from '../shared/swiper-carousel/swiper-carousel.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SwiperCarouselComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
