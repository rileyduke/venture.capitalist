import { Business } from 'src/app/model/business';

export const BUSINESSES: Business[]  = [
  new Business(
    1, // castTime
    1, // baseIncome
    1, // buffedIncome
    1, // instanceCount
    false, // isManaged
    1, // managerCost
    'Ice Cream Shop', // businessName
    1 // baseBusinessCost
  ),
  new Business(
    1,
    5,
    1,
    0,
    false,
    1,
    'Laundromat',
    50
  ),
  new Business(
    1,
    50,
    1,
    0,
    false,
    1,
    'Carwash',
    250
  ),
  new Business(
    1,
    250,
    1,
    0,
    false,
    1,
    'Restaurant',
    500
  )
];
