import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css']
})
export class AboutMeComponentComponent implements OnInit {
  aboutMe:any = {
    birthday: "February 17, 1998",
    age: 24,
    address: "Gloria, Oriental Mindoro",
    nationality: "Filipino"
  }
  constructor() { 
 
  }

  ngOnInit(): void {

  }

}
