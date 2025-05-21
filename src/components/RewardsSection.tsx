
import { Reward } from "@/types/reward";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface RewardsSectionProps {
  rewards: Reward[];
}

const RewardsSection = ({ rewards }: RewardsSectionProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">Rewards</h3>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <div 
            key={reward.id} 
            className="bg-phoenix-100 p-4 rounded-xl flex justify-between items-center"
          >
            <span className="font-medium text-phoenix-800">{reward.name}</span>
            {reward.redeemed ? (
              <div className="bg-phoenix-800 text-white px-3 py-1 rounded-xl text-sm">
                Redeemed
              </div>
            ) : (
              <div className="bg-phoenix-700 text-white px-3 py-1 rounded-xl text-sm">
                {reward.cost} XP
              </div>
            )}
          </div>
        ))}
      </div>
      <Button 
        className="redeem-button mt-5"
        onClick={() => navigate("/rewards")}
      >
        Redeem Rewards
      </Button>
    </div>
  );
};

export default RewardsSection;
