import { Injectable } from '@angular/core';
import { OceanData } from '../interfaces/oceanData';



@Injectable({
  providedIn: 'root'
})
export class OceanDataService {

  constructor() { }

  async getAll(filtro: any):Promise<OceanData[]> {
    const res = await fetch(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?region=${filtro}`);
    const resJson = await res.json();
    if (resJson.results.length > 0) return resJson.results
    return [];
  }

}
