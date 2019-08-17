import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ["styles.css", "./css/*"]
})
export class AppComponent {

  start_step = 1
  title = 'scanpay';
  HTTPActivity: boolean;
  constructor() {
    //this.httpStatus.getHttpStatus().subscribe((status: boolean) => { this.HTTPActivity = status; console.log(status) });
  }
  /*constructor(private globaldata : GlobalData) {
    //this.httpStatus.getHttpStatus().subscribe((status: boolean) => {this.HTTPActivity = status; console.log(status)});
  }*/
}
