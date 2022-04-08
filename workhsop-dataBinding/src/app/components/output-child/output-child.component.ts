import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styles: [
  ]
})
export class OutputChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //EventEmitter  : est un module qui permet de partager des données entre les composants à l'aide 
  // des méthodes emit() et subscribe() : 
   
  // newItemEvent : nom du @Output()

 //EventEmitter<string>-le type de@Output()
 
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
