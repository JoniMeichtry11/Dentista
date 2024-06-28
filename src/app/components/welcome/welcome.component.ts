import { Component } from '@angular/core';
import { SwiperCarouselComponent } from '../shared/swiper-carousel/swiper-carousel.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SwiperCarouselComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  listData = [
    {
      title: 'LA TECNOLOGÍA MÁS AVANZADA',
      description:
        'En nuestra clínica dental utilizamos la última tecnología disponible en el mercado para que su experiencia sea siempre excepcional y consiga los resultados que busca.',
      icon: 'icon-[streamline--ai-technology-spark-solid]',
    },
    {
      title: 'PROFESIONALES ESPECIALIZADOS',
      description:
        'Nuestros dentistas y asistentes están 100% capacitados para brindarle el mejor servicio durante sus procedimientos.',
      icon: 'icon-[vaadin--doctor]',
    },
    {
      title: 'ATENCIÓN PERSONALIZADA',
      description:
        'Nuestro equipo le acompañará en cada etapa de su tratamiento dental, ofreciéndole soluciones basadas en su diagnóstico y necesidades específicas.',
      icon: 'icon-[fluent--dentist-24-filled]',
    },
    {
      title: 'PLANES ASEQUIBLES SIN SORPRESAS',
      description:
        'En nuestra clínica, encontrará planes dentales realmente asequibles sin sorpresas en los pagos y opciones de financiación',
      icon: 'icon-[streamline--money-cash-file-dollar-common-money-currency-cash-file]',
    },
  ];
}
