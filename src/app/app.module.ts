import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilePanelComponent } from './components/profile-panel/profile-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponentComponent } from './components/about-me-component/about-me-component.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfilePanelComponent,
    AboutMeComponentComponent,
    MenuBarComponent,
    ResumeComponent,
    ContactComponent
   
   

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
