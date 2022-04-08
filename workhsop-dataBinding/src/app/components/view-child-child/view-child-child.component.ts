import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styles: [
  ]
})
export class ViewChildChildComponent implements OnInit {
  ngOnInit(): void {}
  constructor() { }
  
  
  public isChecked:boolean=false;
  
  toggle(){
    this.isChecked=!this.isChecked;
  }


}
