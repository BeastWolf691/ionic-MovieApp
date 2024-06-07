import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() click: string = '';

 
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  navigateToSignUp() {
    this.router.navigate(['/after']); // Remplacez '/new-page' par le chemin de la page vers laquelle vous voulez rediriger
  }




}


