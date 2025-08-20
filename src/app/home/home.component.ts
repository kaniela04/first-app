import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { text } from 'node:stream/consumers';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingService = inject(HousingService); //  Inyección del servicio
  housingLocationList: Housinglocation[] = [];
  filteredLocationList:Housinglocation[]=[];
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
    this.filteredLocationList=this.housingLocationList;
    this.filteredLocationList=this.housingLocationList;
  }
//funcion de filtrado
filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
    return;
  }
  this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
    housingLocation?.city.toLowerCase().includes(text.toLowerCase()) ||
    housingLocation?.name.toLowerCase().includes(text.toLowerCase())
  );

 
  }

}
