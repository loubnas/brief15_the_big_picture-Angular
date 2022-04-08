import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styles: [
  ]
})
export class OutputParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
