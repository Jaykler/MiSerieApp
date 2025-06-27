import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonItem, IonList, IonListHeader } from '@ionic/angular/standalone';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonListHeader]
})
export class PersonajesPage implements OnInit {
  personajes = [
    { id: 1, nombre: 'Shigeo Kageyama (Mob)' },
    { id: 2, nombre: 'Reigen Arataka' },
    { id: 3, nombre: 'Dimple' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
