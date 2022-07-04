import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css']
})
export class AboutMeComponentComponent implements OnInit {
  aboutMe:any = {
    intro: "Im starting to make my own carrier as a programmer. This will be my first angular application. I will start to create my own backend for this web profile application. :)",
    birthday: "February 17, 1998",
    age: 24,
    address: "Gloria, Oriental Mindoro",
    nationality: "Filipino"
  }
  toggle: boolean = !true;
  constructor() { 
 
  }

  ngOnInit(): void {

  }

}
