import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-momento-detalle',
  templateUrl: './momento-detalle.page.html',
  styleUrls: ['./momento-detalle.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MomentoDetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
