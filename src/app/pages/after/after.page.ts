import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
// import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-after',
  templateUrl: './after.page.html',
  styleUrls: ['./after.page.scss'],
})
export class AfterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigate(next:string) {
    this.router.navigate(['/home']); // pour rediriger vers une nvl page c'est direct '/(nomdelapage')
  }
}




