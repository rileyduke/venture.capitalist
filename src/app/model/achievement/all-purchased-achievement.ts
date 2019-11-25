import { Achievement } from './achievement'

export class AllPurchasedAchievement extends Achievement {
  setName(): void {
    this.achievementName = 'Diversified'
  }

  // assuming a instanceCount = 0 being the un-purchased state
  isAchieved(): boolean {
    let achieved = true
    this.player.businesses.forEach(business => {
      if (business.instanceCount === 0) {
        achieved = false
      }
    });

    return achieved
  }

  // describe to the user how to get this achievement
  getDescription(): string {
    return 'Purchase Every Business'
  }
  achievementProgress(): string {
    const count = this.player.businesses.filter(x => x.instanceCount > 0).length
    const businessCount = this.player.businesses.length
    return count.toString() + ' of ' + businessCount.toString()
  }
}
