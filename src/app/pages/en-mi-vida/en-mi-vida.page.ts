import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-en-mi-vida',
  templateUrl: './en-mi-vida.page.html',
  styleUrls: ['./en-mi-vida.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EnMiVidaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
