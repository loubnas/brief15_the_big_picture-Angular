import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styles: [
  ]
})
export class InputParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentItem = 'Television';

}
