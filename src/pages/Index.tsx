
import { useState } from "react";
import XPBar from "@/components/XPBar";
import StreakTracker from "@/components/StreakTracker";
import TrophyCollection from "@/components/TrophyCollection";
import RewardsSection from "@/components/RewardsSection";
import NextAssignment from "@/components/NextAssignment";
import Header from "@/components/Header";
import { mockUser, mockTrophies, mockRewards } from "@/data/mockData";
import { Toaster } from "sonner";

const Index = () => {
  const [user, setUser] = useState(mockUser);
  const nextAssignment = {
    courseName: "PSY/110",
    dueDate: new Date("2025-05-30"),
    xpReward: 50
  };

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
          <NextAssignment 
            courseName={nextAssignment.courseName}
            dueDate={nextAssignment.dueDate}
            xpReward={nextAssignment.xpReward}
          />
          <TrophyCollection trophies={mockTrophies} />
          <RewardsSection rewards={mockRewards} />
        </div>
      </div>
    </div>
  );
};

export default Index;
