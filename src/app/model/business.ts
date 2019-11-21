export class Business {
  /* business values */
  // amount of time it takes to make money
  castTime: number;
  // base amount of income for this business
  baseIncome: number;
  // extra income from buffs on this business
  buffedIncome: number;
  // number of instances of this business the player owns
  instanceCount: number;

  /* manager values */
  // manager is purchased
  isManaged: boolean;
  // manager cost
  managerCost: number;

  // name of the business
  businessName: string;
}
