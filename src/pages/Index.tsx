
import { useState } from "react";
import XPBar from "@/components/XPBar";
import StreakTracker from "@/components/StreakTracker";
import BadgeCollection from "@/components/BadgeCollection";
import RewardsSection from "@/components/RewardsSection";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import { mockUser, mockBadges, mockRewards } from "@/data/mockData";
import { Toaster } from "sonner";

const Index = () => {
  const [user, setUser] = useState(mockUser);

  const handleXPIncrease = () => {
    if (user.xp < user.maxXp) {
      setUser(prev => ({
        ...prev,
        xp: Math.min(prev.xp + 25, prev.maxXp)
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Toaster position="top-center" />
      <div className="max-w-md mx-auto p-4">
        <Header userName={user.name} />
        
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <XPBar 
            currentXP={user.xp} 
            maxXP={user.maxXp} 
            onXPIncrease={handleXPIncrease} 
          />
          <StreakTracker streakCount={user.streak} />
          <BadgeCollection badges={mockBadges} />
          <RewardsSection rewards={mockRewards} />
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
