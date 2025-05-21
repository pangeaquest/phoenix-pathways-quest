
import { useState } from "react";
import { mockUser, mockRewards } from "@/data/mockData";
import Navigation from "@/components/Navigation";
import { Reward } from "@/types/reward";
import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";
import { Toaster } from "sonner";

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
        <h1 className="text-2xl font-bold mb-6">Rewards Shop</h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold">Your XP Balance</h2>
            <div className="text-lg font-bold text-phoenix-800">{user.xp} XP</div>
          </div>
          
          <h3 className="font-medium text-lg mb-4">Available Rewards</h3>
          
          <div className="space-y-4">
            {rewards.map((reward) => (
              <div 
                key={reward.id} 
                className={`p-4 rounded-xl ${
                  reward.redeemed 
                    ? "bg-gray-100" 
                    : "bg-phoenix-50 border border-phoenix-100"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{reward.name}</h4>
                  {reward.redeemed ? (
                    <span className="text-xs px-3 py-1 bg-phoenix-800 text-white rounded-full">
                      Redeemed
                    </span>
                  ) : (
                    <span className="text-sm font-semibold text-phoenix-800">
                      {reward.cost} XP
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mt-1">{reward.description}</p>
                
                {!reward.redeemed && (
                  <Button 
                    className="mt-3 w-full bg-phoenix-800 hover:bg-phoenix-700"
                    disabled={user.xp < reward.cost}
                    onClick={() => handleRedeemClick(reward)}
                  >
                    {user.xp >= reward.cost ? "Redeem Now" : "Not Enough XP"}
                  </Button>
                )}
              </div>
            ))}
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
              className="bg-phoenix-800 hover:bg-phoenix-700"
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
