import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.page.html',
  styleUrls: ['./personaje-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PersonajeDetallePage implements OnInit {

  personaje: any;
  personajes = [
    {
      id: 1,
      nombre: 'Shigeo Kageyama (Mob)',
      descripcion: 'Mob es un joven psíquico con poderes inmensos que lucha por mantener sus emociones bajo control para evitar perder el control.',
      imagen: 'assets/mob.jpg'
    },
    {
      id: 2,
      nombre: 'Reigen Arataka',
      descripcion: 'Mentor autoproclamado de Mob, es un estafador carismático pero con buen corazón que da consejos sinceros.',
      imagen: 'assets/reigen.jpg'
    },
    {
      id: 3,
      nombre: 'Dimple',
      descripcion: 'Espíritu maligno reformado que acompaña a Mob y le ofrece ayuda con sus habilidades sobrenaturales.',
      imagen: 'assets/dimple.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.personaje = this.personajes.find(p => p.id === id);
  }

  ngOnInit() {
  }

}
