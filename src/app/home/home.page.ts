import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  selectedImage: string = '../../assets/images/halo.png';
  backgroundColor: string = 'white';

  constructor(private navCtrl: NavController) {}

  navigate(path: string) {
    this.navCtrl.navigateForward(`${path}`);
  }

  changeBackgroundColor(color: string) {
    this.backgroundColor = color;
  }

  changFond(image: string) {
    console.log(image);
    this.selectedImage = image;
    this.changeBackgroundColor('blue');
  }
}

