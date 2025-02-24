import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  housingService = inject(HousingService);
  housingLocation: Housinglocation | undefined;
  route: ActivatedRoute= inject(ActivatedRoute);/** Permite acceder a los datos sobre la ruta actual */
  housingLocationId=-1;

  constructor(){ /** el id parametro pasa a ser una cadena de numero */
    this.housingLocationId=Number(this.route.snapshot.params['id']);
    /** Obtiene el parámetro `id` de la URL y lo convierte a número.
        / `route.snapshot.params['id']` obtiene el valor del parámetro `id` en la URL (por ejemplo, `/details/1`).
        / `Number(...)` convierte el valor a un número, ya que los parámetros de la URL son strings por defecto. */
        this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId); /** trae los datos de housing service segun el ID  */
  }
  ngOnInit() {
    console.log(this.housingLocation); // Agrega esto para ver si los datos están llegando bien
  }
  
}
