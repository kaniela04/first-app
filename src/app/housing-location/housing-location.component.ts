import { Component, Input} from '@angular/core';
import { Housinglocation } from '../housinglocation';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: Housinglocation;

}
