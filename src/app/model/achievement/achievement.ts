import { Player } from "../player"

export abstract class Achievement {
  achievementName: string
  player: Player

  constructor(player: Player) {
    this.player = player
    this.setName()
  }

  // set in the concrete models
  abstract setName(): void

  // sets the description of how to achieve this
  abstract getDescription(): string

  // is the achievement valid
  abstract isAchieved(): boolean

  // number required to achieve this
  abstract achievementProgress(): string

}
