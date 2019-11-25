import { Achievement } from './achievement'

export class AllUpgradedAchievement extends Achievement {
  setName(): void {
    this.achievementName = 'Upgrader'
  }

  // assuming a buffedIncome = 1 being the un-upgraded state
  isAchieved(): boolean {
    let achieved = true
    this.player.businesses.forEach(business => {
      if (business.buffedIncome === 1) {
        achieved = false
      }
    });

    return achieved
  }

  // describe to the user how to get this achievement
  getDescription(): string {
    return 'Upgrade every business at least once'
  }
  achievementProgress(): string {
    const count = this.player.businesses.filter(x => x.buffedIncome > 1).length
    const businessCount = this.player.businesses.length
    return count.toString() + ' of ' + businessCount.toString()
  }
}
