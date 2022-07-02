import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Output() about: EventEmitter<any> = new EventEmitter()
  @Output() resume: EventEmitter<any> = new EventEmitter()
  @Output() contact: EventEmitter<any> = new EventEmitter()
  aboutSelected: any;
  resumeSelected:any;
  contactSelected:any;
  constructor() {
    this.aboutSelected = true;
    this.resumeSelected = false;
    this.contactSelected = false;
   }

  ngOnInit(): void {
  }
  clickAbout(){
    this.about.emit(true);
    this.aboutSelected=true;
    this.resume.emit(false);
    this.resumeSelected = false;
    this.contact.emit(false);
    this.contactSelected = false;

}
  clickResume() {
    this.resume.emit(true)
    this.resumeSelected = true;
    this.about.emit(false)
    this.aboutSelected=false;
    this.contact.emit(false);
    this.contactSelected = false;
    
}
  clickContact(){
    this.contact.emit(true);
    this.contactSelected = true;
    this.resume.emit(false);
    this.resumeSelected = false;
    this.about.emit(false)
    this.aboutSelected=false;
  }

}
