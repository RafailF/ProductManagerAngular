import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  createDb(){
    let  usuresData =  [
      {  id:  1,  vehicle:  'Peugeot', rate: 'A', image: "https://images.caradisiac.com/logos-ref/gamme/gamme--peugeot-108/S4-gamme--peugeot-108.jpg" },
      {  id:  2,  vehicle:  'Mercedes', rate: 'B', image: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/explore/vehicules-amg/_jcr_content/swipeableteaserbox/par/swipeableteaser_66ce/asset.MQ6.12.20210329093409.jpeg" },
      {  id:  3,  vehicle:  'Alpha Rex', rate: 'C', image: "https://i.ytimg.com/vi/HR655wUMh78/maxresdefault.jpg" },
      {  id:  4,  vehicle:  'Toyota', rate: 'D', image: "https://www.turbo.fr/sites/default/files/2022-04/Toyota_0.jpeg" },
    ];

    let  referenceData =  [
      {  id:  1,  vehicle:  'Peugeot', dimension : 'dimension 1', image: "https://images.caradisiac.com/logos-ref/gamme/gamme--peugeot-108/S4-gamme--peugeot-108.jpg" },
      {  id:  2,  vehicle:  'Mercedes', dimension : 'dimension 1', image: "https://www.mercedes-benz.fr/passengercars/mercedes-benz-cars/models/amg/explore/vehicules-amg/_jcr_content/swipeableteaserbox/par/swipeableteaser_66ce/asset.MQ6.12.20210329093409.jpeg" },
      {  id:  3,  vehicle:  'Alpha Rex', dimension : 'dimension 2', image: "https://i.ytimg.com/vi/HR655wUMh78/maxresdefault.jpg" },
      {  id:  4,  vehicle:  'Toyota', dimension : 'dimension 3', image: "https://www.turbo.fr/sites/default/files/2022-04/Toyota_0.jpeg" },
    ];

    return {usures: usuresData, references:referenceData};

  }
}
