import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }


housingLocationList: Housinglocation[] = [
  {
    id: 0,
    price: 100000000,
    name: 'Homesteady Housing',
    city: 'Chicago',
    state: 'IL',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDhnkHqtMsDBd51ECeJGNUugCthylCexMcLw&s`,
    availableUnits: 4,
    wifi: true,
    laundry: true,
  },
  {
    id: 1,
    price: 20450000,
    name: 'Cottage',
    city: 'Texas',
    state: 'CA',
    photo: `https://cf.bstatic.com/xdata/images/hotel/max1024x768/425331810.jpg?k=56894ac388a20898ab037c5dba554343918a1fe902a396566900249b2f9f768c&o=&hp=1`,
    availableUnits: 0,
    wifi: false,
    laundry: true,
  },
  {
    id: 2,
    price: 125500000,
    name: 'Modern House With Pool',
    city: 'Miami',
    state: 'AK',
    photo: `https://captainpools.com/wp-content/uploads/2023/11/piscinaycasa-8-1024x675-1.jpeg`,
    availableUnits: 1,
    wifi: false,
    laundry: false,
  },
  {
    id: 3,
    price: 100500000,
    name: 'Modern House Park City',
    city: 'Chicago',
    state: 'IL',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU08ljg3me6uYU4kGYI4EwpEhvhw-JlzMmi0Bri3YgwuHltr4XCf1Hibj_eNKwi_LomQg&usqp=CAU`,
    availableUnits: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 4,
    price: 50500000,
    name: 'Family House',
    city: 'Texas',
    state: 'IN',
    photo: `https://images.homify.com/v1448129217/p/photo/image/1135013/7.jpg`,
    availableUnits: 1,
    wifi: true,
    laundry: false,
  },
  {
    id: 5,
    price: 100000000,
    name: 'Detached House',
    city: 'Florida',
    state: 'CA',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4r7de5GWwMeFm1i-r1bh-aGf15eRUulG6w&s`,
    availableUnits: 2,
    wifi: true,
    laundry: true,
  },
  {
    id: 6,
    price: 250000000,
    name: 'Family House',
    city: 'Oakland',
    state: 'CA',
    photo: `https://media.istockphoto.com/id/876864896/es/foto/construcci%C3%B3n-nuevo-lujoso-en-bellevue-wa.jpg?s=612x612&w=0&k=20&c=EYHCvXQT7NNnJu5wNjuIB57Yhow6PXfZTkO94qWY_64=`,
    availableUnits: 5,
    wifi: true,
    laundry: true,
  },
  {
    id: 7,
    price: 120000000,
    name: 'Quiet Home',
    city: 'Oakland',
    state: 'CA',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLHwRe8UbDtCU-NY6jzFwYZgm3uRZ-7OiiQuJsX3PES0FuBfOPmvhEDm-mGJ8B1CczT3g&usqp=CAU`,
    availableUnits: 2,
    wifi: true,
    laundry: true,
  },
  {
    id: 8,
    price: 100000000,
    name: 'Modern House',
    city: 'Chicago',
    state: 'CA',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdvnJmSK75TQQVi8XG9qKmA_05SzPZtOCfg&s`,
    availableUnits: 10,
    wifi: false,
    laundry: false,
  },
  {
    id: 9,
    price: 55000000,
    name: 'Family House',
    city: 'California',
    state: 'OR',
    photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NFfLSN7yW_yy3YPCTIG-XY32LzP56K2hDQ&s`,
    availableUnits: 6,
    wifi: true,
    laundry: true,
  },

];

getAllHousingLocation(): Housinglocation[]{
  return this.housingLocationList;
}

getHousingLocationById(id:number):Housinglocation | undefined{
  return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
}
}