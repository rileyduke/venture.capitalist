import { Achievement } from './achievement'

export class MillionaireAchievement extends Achievement {
  setName(): void {
    this.achievementName = 'Millionaire'
  }

  // assuming millionaire = player.money > 999,999
  isAchieved(): boolean {
    return this.player.money >= 1000000
  }

  // describe to the user how to get this achievement
  getDescription(): string {
    return 'Earn $1,000,000'
  }
  achievementProgress(): string {
    return '$' + this.player.money + ' of $1,000,000'
  }
}
