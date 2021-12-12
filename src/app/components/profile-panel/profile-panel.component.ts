import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.css']
})
export class ProfilePanelComponent implements OnInit {
  backgroundImage:string = "/assets/images/backgroundProfile1.jpg"
  // backgroundImage:string = "/assets/images/coverPhoto.jfif"
  profilePic:string = "/assets/images/ProfilePicture.JPG"
  constructor() { }

  ngOnInit(): void {
  }

}
