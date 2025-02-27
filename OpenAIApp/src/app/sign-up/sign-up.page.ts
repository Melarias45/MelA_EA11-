import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonList, IonLabel, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonList, IonLabel, IonButton]
})
export class SignUpPage implements OnInit {
  email: string = ' ';
  password: string = ' ';

  constructor(private authService: AuthService, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }


  async onSubmit() {
    try {
      await this.authService.register(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Signup Success',
        message: 'You have signed up successfully!',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/login']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error ocurred during signup.',
        buttons: ['OK'],
      });
      await alert.present();
    }


    /*
    Funcion de la EA12
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (this.validateEmail(email) && password) {
      const alert = await this.alertController.create({
        header: 'Signup Success',
        message: 'You have signed up successfully!',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please complete all.',
        buttons: ['OK'],
      });
      await alert.present();
    }*/
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-0.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onSignup() {
    this.router.navigateByUrl("login")
  }

}


