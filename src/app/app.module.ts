import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePanelComponent,
    AboutMeComponentComponent,
   

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
