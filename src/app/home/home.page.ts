import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedImage: string = '../../assets/images/halo.png';
  backgroundImage: string = '../../../assets/images/halo.png'; // Image de fond par défaut

  constructor(private navCtrl: NavController) {}

  navigate(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }

  changFond(image: string) {
    console.log(image);
    this.selectedImage = image;
    this.backgroundImage = image; // Changer l'image de fond
  }
}
