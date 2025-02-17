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
    photo: `https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg`,
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
    photo: `https://planosdecasas.shop/wp-content/uploads/2021/11/Casa-campo-12x12-B_Photo-8_Photo-2.webp`,
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
    photo: `https://theressa.net/images/projects/6033248622aa8-01.jpg`,
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
    photo: `https://images.adsttc.com/media/images/5bba/9118/f197/ccfd/d500/00c7/newsletter/38504-.jpg?1538953492`,
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
    photo: `https://www.proyectosdecasas.es/files/images/Casas_Modernas_Majadahonda_principal.jpg`,
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
    photo: `https://minihogar.com/wp-content/uploads/2023/11/Frente-de-casa-de-dos-pisos-estilo-minimalita.jpg`,
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
    photo: `https://images.adsttc.com/media/images/5f37/1cac/b357/65d2/c900/0089/newsletter/13-Imagen_Exterior__arquitecturaicomplementos.jpg?1597447331`,
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
    photo: `https://dossierdearquitectura.com/imgPosts/628dbb7608019.jpg`,
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