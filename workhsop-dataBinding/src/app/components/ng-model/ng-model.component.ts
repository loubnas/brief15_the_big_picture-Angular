import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styles: [
  ]
})
export class NgModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value="";
  clearValue() {
    this.value="";
  }

}
