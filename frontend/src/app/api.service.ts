import { Injectable } from '@angular/core';
import { BusinessCardInfo } from './info';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://your-backend-api-url.com/';

  constructor() { }

  async getBusinessInfo() {
    try {
      // return business card info from model for now
      return BusinessCardInfo.getBusinessCardInfo();
     // const response = await axios.get(this.apiUrl + 'business-info');
      //return response.data;
    } catch (error) {
      console.error(error);
    }
    return undefined;
  }
}