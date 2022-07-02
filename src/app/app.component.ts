import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 showabout: any;
  showresume: any;
  showcontact: any;
  constructor(){
    this.showresume = false;
    this.showabout = true;
    this.showcontact = false;
  }
  about(data: boolean){
    this.showabout = data;
    console.log(data , "about")
  }
  resume(data: boolean){
    this.showresume = data;
    console.log(data , "resume")
  }
  contact(data: boolean){
    this.showcontact = data;
  }
  scroll() {
   
 }
}
