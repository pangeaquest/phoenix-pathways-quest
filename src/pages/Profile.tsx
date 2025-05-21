
import { useState } from "react";
import { mockUser } from "@/data/mockData";
import Navigation from "@/components/Navigation";
import XPBar from "@/components/XPBar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trophy, Award, Calendar, BookOpen, User } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(mockUser);

  const stats = [
    { label: "Current Level", value: user.level, icon: Trophy },
    { label: "Badges Earned", value: "4/15", icon: Award },
    { label: "Week Streak", value: user.streak, icon: Calendar },
    { label: "Courses", value: "4", icon: BookOpen },
  ];

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
      <div className="max-w-md mx-auto p-4">
        <Card className="rounded-xl border-0 shadow-md bg-gradient-to-br from-phoenix-800 to-phoenix-900 text-white mb-4">
          <CardHeader className="flex flex-row items-center pb-2">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
              <User size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="opacity-80">University of Phoenix Student</p>
            </div>
          </CardHeader>
          <CardContent>
            <XPBar 
              currentXP={user.xp} 
              maxXP={user.maxXp} 
              onXPIncrease={handleXPIncrease} 
            />
            
            <p className="text-sm opacity-90 mb-2">Level {user.level} Student</p>
            <p className="text-xs opacity-75">Keep earning XP to level up!</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl mb-4">
          <CardHeader className="pb-2">
            <h2 className="font-bold text-lg">Stats</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <stat.icon size={24} className="mb-2 text-phoenix-800" />
                  <span className="font-bold text-lg">{stat.value}</span>
                  <span className="text-xs text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="rounded-xl">
          <CardHeader className="pb-2">
            <h2 className="font-bold text-lg">Achievement Highlights</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="badge-icon mr-3">
                  <img src="https://img.icons8.com/fluency/48/handshake.png" alt="Helpful Peer" className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Helpful Peer</h4>
                  <p className="text-xs text-gray-500">Helped 5 classmates with assignments</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center">
                <div className="badge-icon mr-3">
                  <img src="https://img.icons8.com/emoji/48/megaphone-emoji.png" alt="Most Engaging" className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Most Engaging</h4>
                  <p className="text-xs text-gray-500">Top contributor in class discussions</p>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center">
                <div className="badge-icon mr-3">
                  <img src="https://img.icons8.com/fluency/48/alarm-clock.png" alt="Early Bird" className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">Early Bird</h4>
                  <p className="text-xs text-gray-500">Submitted 3 assignments ahead of deadline</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Profile;
