import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { OpenaiService } from '../openai.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonButton],
})
export class HomePage {
  constructor(private router: Router, private openAIService: OpenaiService, private authService: AuthService, private alertController: AlertController
  ) { }

  ideaPrompt: string = '';
  generatedIdea: string = '';

  async generateIdea() {
    if (this.ideaPrompt.trim() === '') {
      alert('Por favor ingresa una idea inicial');
      return;
    }

    this.generatedIdea = await this.openAIService.generateIdea(this.ideaPrompt);
  }

  async onLogout() {
    try {
      await this.authService.logout(); // Llama al método logout
      this.router.navigate(['/login']); // Redirige al login
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo cerrar sesión. Inténtalo de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
