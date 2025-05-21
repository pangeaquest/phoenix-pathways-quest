
import { Reward } from "@/types/reward";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

interface RewardsSectionProps {
  rewards: Reward[];
}

const RewardsSection = ({ rewards }: RewardsSectionProps) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">Rewards</h3>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <div 
            key={reward.id} 
            className={`p-4 rounded-xl flex justify-between items-center ${
              reward.redeemed 
                ? "bg-green-100 border border-green-200" 
                : "bg-amber-100 border border-amber-200"
            }`}
          >
            <span className={`font-medium ${reward.redeemed ? "text-green-800" : "text-amber-800"}`}>
              {reward.name}
            </span>
            {reward.redeemed ? (
              <div className="bg-green-600 text-white px-3 py-1 rounded-xl text-sm">
                Completed
              </div>
            ) : (
              <div className="bg-amber-600 text-white px-3 py-1 rounded-xl text-sm">
                {reward.cost} XP
              </div>
            )}
          </div>
        ))}
      </div>
      <Button 
        className="w-full bg-red-900 hover:bg-red-800 mt-4 flex items-center gap-2"
      >
        <Award size={18} />
        Redeem Rewards
      </Button>
    </div>
  );
};

export default RewardsSection;
