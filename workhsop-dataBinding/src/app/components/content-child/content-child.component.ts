import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styles: [
  ]
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Input="dsdsdsdsd";

}
