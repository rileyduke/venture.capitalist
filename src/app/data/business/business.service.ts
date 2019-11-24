import { Injectable } from '@angular/core';
import { Business } from 'src/app/model/business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  public saveBusiness(business: Business): void {
    localStorage.setItem('business-' + business.businessName, JSON.stringify(business))
  }
}
