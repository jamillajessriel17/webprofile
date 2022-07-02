import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']

})
export class ResumeComponent implements OnInit {
   pdfSrc = "/assets/RESUME-Jessriel_Jamilla.pdf";
    //  pdfSrc = "https://www.clickdimensions.com/links/TestPDFfile.pdf"
  // pdfSrc = 'https://www.clickdimensions.com/links/TestPDFfile.pdf'
  constructor() { }

  ngOnInit(): void {
  }

}
