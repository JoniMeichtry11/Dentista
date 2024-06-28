import { Component } from '@angular/core';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.scss'
})
export class ServiceSectionComponent {
  listServices = [
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/03/servicios-ODONTOLOGIA-GENERAL.jpg',
      title: 'ODONTOLOGÍA GENERAL',
      description: 'Ofrecemos una amplia variedad de opciones para sus evaluaciones rutinarias o tratamientos especializados menos complejos. Obtenga más información aquí.'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/03/servicios-ODONTOLOGIA-ESTETICA-1.jpg',
      title: 'ODONTOLOGÍA COSMÉTICA',
      description: '¡Consigue la sonrisa de tus sueños con nosotros! Nuestros especialistas dejarán tus dientes como siempre has querido- descubre aquí todas las opciones que te ofrecemos.'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/03/servicios-CORONAS-Y-PUENTES.jpg',
      title: 'ODONTOLOGÍA RESTAURADORA',
      description: 'Si sus dientes están cariados, desgastados, agrietados o si le faltan algunos, ¡no se preocupe! Nuestro equipo puede restaurar su sonrisa sana y darle un aspecto estético y natural.'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/03/servicios-DENTADURA-POSTIZA.jpg',
      title: 'TRATAMIENTO PERIODONTAL',
      description: '¿Ha estado experimentando dolor, inflamación o sangrado de las encías? Si es así, es hora de visitar a un especialista dental en D Art Dental para iniciar su tratamiento periodontal.'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/05/DENTAL-IMPLANTS.jpg',
      title: 'IMPLANTES DENTALES',
      description: 'Si necesita sustituir uno o varios dientes, ¡no se preocupe! En nuestra consulta, diseñaremos sus implantes dentales para que nunca vuelva a tener miedo de sonreír con confianza.'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/05/Surgery.jpg',
      title: 'CIRUGÍA',
      description: 'D Art Dental ofrece servicios quirúrgicos programados y un diagnóstico previo de nuestros especialistas dentales. ¡Nuestro objetivo es ayudarle a mejorar su salud bucodental y verle sonreír!'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/05/endodontics.jpg',
      title: 'ENDODONCIA',
      description: 'La endodoncia es un procedimiento odontológico ideal para conservar tus dientes sin recurrir a la extracción dental cuando existen afecciones nerviosas. ¡Solicita más información sobre este servicio y deja tus dientes en las mejores manos!'
    },
    {
      img: 'https://dartdentalmiami.com/wp-content/uploads/2022/03/servicios-ROOT-CANALS.jpg',
      title: 'URGENCIAS DENTALES',
      description: 'Si presenta una emergencia dental y necesita atención inmediata, nuestro equipo de D Art Dental puede ayudarle. Nuestros especialistas dentales están preparados para ofrecerle la mejor atención y soluciones.'
    },
  ];
}
