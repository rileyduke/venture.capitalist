import { Player } from './player';
import { BusinessService } from '../data/business/business.service';
import { ConcatSource } from 'webpack-sources';

export class Business {
  constructor(
    // amount of time it takes to make money
    public castTime: number,
    // base amount of income for this business
    public baseIncome: number,
    // extra income from buffs on this business
    public buffedIncome: number,
    // number of instances of this business the player owns
    public instanceCount: number,
    // manager is purchaseder,
    public isManaged: boolean,
    // manager cost
    public managerCost: number,
    // name of the business
    public businessName: string,

    // initial cost of the business
    public baseBusinessCost: number,
    // progress
    public progress: number,
    // last scored time in milliseconds
    public lastScored: number,
    // started time in milliseconds
    public lastStarted: number,
    // tracking if the business is currently being cast
    public isRunning: boolean
  ) { }

  // decision maker as to if you can use a business:
  public isUsable(): boolean {
    return this.instanceCount > 0
  }

  // income is a function of:
  //  # of businesses owned
  //  base business score
  //  buffed business score
  public getIncome(): number {
    return (this.baseIncome + this.buffedIncome) * this.instanceCount
  }

  // for progress bar display purpose
  public getPercentageDone(): number {
    const now = Date.now()
    if (this.isManaged) {
      return 100 * ((now - this.lastScored) / this.castTime)
    } else {
      return 100 * ((now - this.lastStarted) / this.castTime)
    }

  }

  // cost of the next insance is a function of:
  //  base business cost
  //  # of businesses owned (instanceCount)
  public getInstanceCost(): number {
    return this.baseBusinessCost * this.instanceCount + this.baseBusinessCost
  }

  // increase the player's score
  public scoreBusiness(player: Player, numTimes: number = 1): void {
    player.money += numTimes * this.getIncome()
    this.lastScored = Date.now()

    // store
    this.storeBusiness()
    player.storePlayer()
  }

  // store in localstorage
  public storeBusiness() {
    // TODO: delegate to businessservice
    // BusinessService.saveBusiness(this)
    localStorage.setItem('business-' + this.businessName, JSON.stringify(this))
  }

  // either purchases the first instance, or increases the instance count
  public purchaseBusiness(player: Player): void {
    if (player.money >= this.baseBusinessCost) {
      player.money -= this.getInstanceCost()
      this.instanceCount++
    }
  }

  // if no manager exists, be able to purchase
  public puchaseManager(player: Player): void {
    if (player.money >= this.managerCost && !this.isManaged) {
      player.money -= this.managerCost
      this.isManaged = true
    }

    if (this.isRunning) {
      this.storeBusiness()
    }
  }
}
