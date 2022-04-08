import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content-child-parent',
  templateUrl: './content-child-parent.component.html',
  styles: [
  ]
})
export class ContentChildParentComponent implements OnInit,AfterContentInit {

  constructor() { }

  //@ContentChild(ContentChildComponent, { read: ElementRef}) contentChild? : ContentChildComponent;
  //@ContentChild('parChild') contentChild : ElementRef;

  //ngAfterContentInit() est déclenchée à l’initialisation après la projection de contenu. Elle est déclenchée même s’il n’y a
  // pas de contenu à projeter.
  
  ngAfterContentInit(): void {
    //console.log("on after change: "+ this.contentChild);
  }

  ngOnInit(): void {
    //console.log("on init: " + this.contentChild);
  }


  isFirst :boolean = true;

  toggleFirst(){
    this.isFirst=!this.isFirst;
  }

}
