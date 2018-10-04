import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("something") myHeading: ElementRef;

  title = 'Author Display';

  ngAfterViewInit() {
    this.myHeading.nativeElement.style = "color:blue";
  }

}
