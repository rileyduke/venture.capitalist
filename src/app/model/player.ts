import { Business } from './business';

export class Player {
  // list of all of the business the player owns
  public businesses: Business[];

  // total amount of money the player owns
  public money: number;
  // name of the player
  public playerName: string;
}
