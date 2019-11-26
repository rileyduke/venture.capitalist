import { Business } from './business';

export class Player {
  constructor(
    // list of all of the business the player owns
    public businesses: Business[],
    // total amount of money the player owns
    public money: number,
    // name of the player
    public playerName: string
  ) { }

  // calculate money scored while offline
  // only do so for managed businesses
  public pickupOfflineFunds(): void {
    this.businesses.forEach(business => {
      if (business.isManaged) {
        const now = Date.now()
        const timePassed = now - business.lastScored
        const numberOfTimesToScore = Math.floor(timePassed / business.getCastTime())
        if (numberOfTimesToScore > 0) {
          business.scoreBusiness(this, numberOfTimesToScore)
        }

        //
      } else if (business.isRunning) {
        const now = Date.now()
        const timePassed = now - business.lastStarted
        const numberOfTimesToScore = Math.floor(timePassed / business.getCastTime())
        if (numberOfTimesToScore > 0) {
          business.isRunning = false
          business.scoreBusiness(this)
        }
      }
    });
  }

  public storePlayer(): void {
    const p = new Player([], this.money, this.playerName)
    // TODO: delegate to playerservice
    localStorage.setItem('player', JSON.stringify(p))
  }
}
