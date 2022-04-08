import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styles: [
  ]
})
export class PropertyComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}



  isChecked:boolean=false;
  
  toggleCheck(){
    this.isChecked=!this.isChecked;
  }
  
  customText:String="this is a test paragraph";

  testFuncBinding(){
    return "function return value";
  }




}
