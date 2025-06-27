import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MomentosPage implements OnInit {

  momentos = [
    { id: 1, titulo: 'Explosión emocional de Mob', foto: 'assets/momento1.jpg' },
    { id: 2, titulo: 'Reigen da un discurso épico', foto: 'assets/momento2.jpg' },
    { id: 3, titulo: 'Dimple se sacrifica', foto: 'assets/momento3.jpg' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
