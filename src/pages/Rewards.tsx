
import { useState } from "react";
import { mockUser, mockRewards } from "@/data/mockData";
import Navigation from "@/components/Navigation";
import { Reward } from "@/types/reward";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Flame, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import StreakTracker from "@/components/StreakTracker";
import { Link } from "react-router-dom";

const Rewards = () => {
  const [user] = useState(mockUser);
  const [rewards, setRewards] = useState<Reward[]>(mockRewards);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRedeemClick = (reward: Reward) => {
    setSelectedReward(reward);
    setIsDialogOpen(true);
  };

  const handleRedeem = () => {
    if (selectedReward && user.xp >= selectedReward.cost) {
      setRewards(prev => 
        prev.map(r => 
          r.id === selectedReward.id 
            ? { ...r, redeemed: true, redeemedDate: new Date() } 
            : r
        )
      );
      toast.success("Reward redeemed successfully!", {
        description: "Check your email for details."
      });
    } else {
      toast.error("Not enough XP to redeem this reward");
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto p-4">
        <div className="flex items-center gap-2 mb-6">
          <img 
            src="/lovable-uploads/7599e26f-2f04-4b42-9bab-933e2a3ddcb4.png" 
            alt="Party Popper" 
            className="w-8 h-8" 
          />
          <h1 className="text-2xl font-bold">Rewards Dashboard</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
          <h2 className="text-xl font-bold mb-3">XP Progress</h2>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-red-900 flex items-center justify-center text-white font-bold">
              XP
            </div>
            
            <div className="flex-1">
              <div className="text-red-900 font-semibold mb-1">
                {user.xp}/{user.maxXp}
              </div>
              <Progress 
                value={(user.xp / user.maxXp) * 100} 
                className="h-6 bg-red-100"
              >
                <div 
                  className="h-full bg-red-900 flex items-center justify-end pr-2 text-xs text-white"
                  style={{ width: `${(user.xp / user.maxXp) * 100}%` }}
                >
                  {user.xp}/{user.maxXp}
                </div>
              </Progress>
              
              <div className="text-sm text-gray-600 mt-2">
                <p>Earn XP by completing activities in your courses:</p>
                <Link to="/courses" className="flex items-center gap-2 text-red-900 hover:underline font-medium mt-1">
                  Go to Courses <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <StreakTracker streakCount={user.streak} />
            <div className="text-sm text-gray-600 mt-2">
              <p>Keep your streak going by completing at least one activity per week!</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white rounded-xl p-4 border border-gray-100">
            <h3 className="font-bold text-xl mb-3">Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              {mockRewards.map((reward) => (
                <div key={reward.id} className="bg-gray-50 p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                      <img 
                        src="https://img.icons8.com/fluency/48/alarm-clock.png" 
                        alt={reward.name} 
                        className="w-6 h-6" 
                      />
                    </div>
                    <div>
                      <div className="font-medium">{reward.name}</div>
                      <div className="text-xs text-gray-600">{reward.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-4">
              <Link to="/badges" className="flex items-center justify-center gap-2 text-red-900 hover:underline font-medium">
                View All Badges <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-3">Rewards</h3>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-semibold">${reward.cost/100} Starbucks Gift Card</div>
                    <div className="text-xs text-gray-600">Cost: {reward.cost} XP</div>
                  </div>
                  {reward.redeemed ? (
                    <span className="bg-red-900 text-white px-3 py-1 rounded-md text-sm">
                      Redeemed
                    </span>
                  ) : (
                    <Button 
                      className="bg-red-900 hover:bg-red-800"
                      onClick={() => handleRedeemClick(reward)}
                      disabled={user.xp < reward.cost}
                    >
                      Redeem
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Redeem this reward?</AlertDialogTitle>
            <AlertDialogDescription>
              You're about to redeem {selectedReward?.name} for {selectedReward?.cost} XP.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleRedeem}
              className="bg-red-900 hover:bg-red-800"
            >
              Yes, Redeem
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Navigation />
    </div>
  );
};

export default Rewards;
