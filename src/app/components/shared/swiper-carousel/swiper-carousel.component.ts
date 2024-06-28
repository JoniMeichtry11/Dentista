import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper-carousel',
  standalone: true,
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperCarouselComponent implements OnInit {
  slidesDesktop = [
    {
      image:
        'https://dartdentalmiami.com/wp-content/uploads/2022/03/banner-home-02.jpg',
      text: 'Descubre la mejor dentista de la zona',
    },
    {
      image:
        'https://dartdentalmiami.com/wp-content/uploads/2022/03/banner-home-03.jpg',
      text: 'Exámenes y radiografías gratuitos para nuevos pacientes',
    },
  ];
  slidesMovil = [
    {
      image:
        'https://dartdentalmiami.com/wp-content/uploads/2022/05/banner-home-02-movil.jpg',
      text: 'Descubre la mejor dentista de la zona',
    },
    {
      image:
        'https://dartdentalmiami.com/wp-content/uploads/2022/03/banner-home-03-movil.jpg',
      text: 'Exámenes y radiografías gratuitos para nuevos pacientes',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
