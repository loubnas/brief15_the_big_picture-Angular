import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [
  ]
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
  isChecked:boolean=false;
  
  hotelName : string ="Grand hotel";
  
  hotelStars : number =3;

  hotelLocation :string ="Paris";

  GetNombreResidents(){
    
    return 190;
  }


  changeStars(){
    this.hotelStars=5;
  }
  
  // limitation de l'utilisation de l'interpolation ---> besoin d'utiliser l property binding 
  toggleCheck(){
    this.isChecked=!this.isChecked;
  }



}
