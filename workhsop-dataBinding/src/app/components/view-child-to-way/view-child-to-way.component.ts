import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child-to-way',
  templateUrl: './view-child-to-way.component.html',
  styles: [
  ]
})
export class ViewChildToWayComponent implements OnInit,AfterViewInit {

  constructor() { }
  
  @ViewChild(ViewChildChildComponent)
  child?: ViewChildChildComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }
  toggleCheck(){
    this.child?.toggle()
  }

}
