import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonList, IonLabel, IonButton]
})
export class SignUpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
