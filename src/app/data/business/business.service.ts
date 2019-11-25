import { Injectable } from '@angular/core';
import { Business } from 'src/app/model/business';
import { Player } from 'src/app/model/player';

import BusinessJson from 'src/static/json/businessesJson.json';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  public saveBusiness(business: Business): void {
    localStorage.setItem('business-' + business.businessName, JSON.stringify(business))
  }

  // get from json or localstorage
  public populateBusinesses(player: Player): void {
    // foreach business key in localstorage
    Object.keys(localStorage).filter(x => x.match('business-')).forEach(k => {
      const bus: Business = JSON.parse(localStorage[k])
      const b = new Business( bus.castTime,
        bus.baseIncome,
        bus.buffedIncome,
        bus.instanceCount,
        bus.isManaged,
        bus.managerCost,
        bus.businessName,
        bus.baseBusinessCost,
        bus.progress,
        bus.lastScored,
        bus.lastStarted,
        bus.isRunning)

      // push the business to the player's array
      player.businesses.push(b)
    })

    // nothing in localstorage, get from static JSON 
    if (player.businesses.length === 0) {
      BusinessJson.forEach(businessjson => {
        const b = new Business( businessjson.castTime,
          businessjson.baseIncome,
          businessjson.buffedIncome,
          businessjson.instanceCount,
          businessjson.isManaged,
          businessjson.managerCost,
          businessjson.businessName,
          businessjson.baseBusinessCost,
          businessjson.progress,
          businessjson.lastScored,
          businessjson.lastStarted,
          businessjson.isRunning)
  
        // push the business to the player's array
        player.businesses.push(b)
        // and put it in localstorage
        b.storeBusiness()
      });
    }

    // sort by cast times..
    player.businesses.sort((a,b)=>a.castTime - b.castTime)
  }
}
