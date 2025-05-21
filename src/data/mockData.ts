
import { User } from "@/types/user";
import { Trophy } from "@/types/trophy";
import { Reward } from "@/types/reward";

export const mockUser: User = {
  id: "1",
  name: "Sarah",
  xp: 1325,
  maxXp: 1500,
  level: 5,
  streak: 5
};

export const mockTrophies: Trophy[] = [
  {
    id: "1",
    name: "Early Bird",
    description: "For submitting the assignments early",
    icon: "https://img.icons8.com/fluency/48/alarm-clock.png",
    earned: true
  },
  {
    id: "2",
    name: "Helpful Peer",
    description: "For offering help to others",
    icon: "https://img.icons8.com/fluency/48/handshake.png",
    earned: true
  },
  {
    id: "3",
    name: "Most Engaging",
    description: "For being an active voice in the community",
    icon: "https://img.icons8.com/emoji/48/megaphone-emoji.png",
    earned: true
  },
  {
    id: "4",
    name: "Comeback Kid",
    description: "Returning after a break with impact",
    icon: "https://img.icons8.com/color/48/restart.png",
    earned: true
  }
];

export const mockRewards: Reward[] = [
  {
    id: "1",
    name: "$5 Starbucks Gift Card",
    description: "Enjoy a coffee on us!",
    cost: 1000,
    redeemed: true,
    redeemedDate: new Date("2023-05-15")
  },
  {
    id: "2",
    name: "Amazon $10 Gift Card",
    description: "Shop for what you need!",
    cost: 2000,
    redeemed: false
  },
  {
    id: "3",
    name: "Extended Assignment Deadline",
    description: "Get an extra 48 hours on any assignment",
    cost: 1500,
    redeemed: false
  }
];
