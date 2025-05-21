
export interface Reward {
  id: string;
  name: string;
  description: string;
  cost: number;
  redeemed: boolean;
  redeemedDate?: Date;
}
