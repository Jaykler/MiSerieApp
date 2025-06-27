import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-momento-detalle',
  templateUrl: './momento-detalle.page.html',
  styleUrls: ['./momento-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MomentoDetallePage implements OnInit {

  momento: any;
  momentos = [
    {
      id: 1,
      titulo: 'Explosión emocional de Mob',
      descripcion: 'Cuando Mob alcanza el 100% de sus emociones y libera un inmenso poder psíquico.',
      video: 'assets/momento1.mp4'
    },
    {
      id: 2,
      titulo: 'Reigen da un discurso épico',
      descripcion: 'Reigen se enfrenta a poderosos enemigos y los derrota con sabias palabras y carisma.',
      video: 'assets/momento2.mp4'
    },
    {
      id: 3,
      titulo: 'Dimple se sacrifica',
      descripcion: 'Dimple se sacrifica en una escena conmovedora para salvar a Mob.',
      video: 'assets/momento3.mp4'
    }
  ];

  constructor(private route: ActivatedRoute) {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.momento = this.momentos.find(m => m.id === id);
  }
  

  ngOnInit() {
  }

}
