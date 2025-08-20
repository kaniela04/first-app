import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'ARRENDA HOME',
    },
    {
      path: 'details/:id', /*segmento para identificar el parametro de la ruta id */
      component: DetailsComponent,
      title: 'Home details',
      /*en este caso, el id es dinamico y cambiara en funcion de como el codigo solicite la ruta */
      
    },
      ];
  export default routeConfig;