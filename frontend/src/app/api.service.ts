import { Injectable } from '@angular/core';
import { BusinessCardInfo } from './info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/users/?id=';
  datosUser : any;

  constructor(
    private http: HttpClient
  ) { }

  async getBusinessInfo(id: number) {
    try {
      //get a la API
      this.datosUser = await this.http.get(this.apiUrl+id).toPromise();
      console.log("get", this.datosUser);

      return BusinessCardInfo.getBusinessCardInfo(this.datosUser.rows);
  
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }
}