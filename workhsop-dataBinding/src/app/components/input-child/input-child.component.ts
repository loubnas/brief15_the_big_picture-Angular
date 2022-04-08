import { Component, Input, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styles: [
  ]
})
export class InputChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  @Input() item=''
}
