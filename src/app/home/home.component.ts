import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg';

  housinglocation: Housinglocation = {
    id: 99990,
    name: 'House-Cottage',
    city: 'texas',
    state: 'ST',
    photo: this.baseUrl, // Corregido
    availableUnits: 10000000,
    wifi: true,
    laundry: false,
  };
}