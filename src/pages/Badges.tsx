import { useState } from "react";
import { mockBadges } from "@/data/mockData";
import Navigation from "@/components/Navigation";
import { Badge as BadgeType } from "@/types/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Badges = () => {
  const [badges] = useState<BadgeType[]>(mockBadges);

  const allBadgeTypes = [
    { title: "Academics", 
      badges: [
        {
          id: "5",
          name: "Perfect Score",
          description: "Achieved 100% on an assignment",
          icon: "https://img.icons8.com/fluency/48/checkmark--v1.png", 
          earned: false,
          courseRequired: "Introduction to Business",
          activityRequired: "Final Project"
        },
        ...badges.filter(b => b.id === "1"),
      ]
    },
    { title: "Community", 
      badges: [
        ...badges.filter(b => b.id === "2" || b.id === "3"),
        {
          id: "6",
          name: "Forum Legend",
          description: "Created 10+ forum posts with responses",
          icon: "https://img.icons8.com/fluency/48/comments.png", 
          earned: false,
          courseRequired: "Marketing Fundamentals",
          activityRequired: "Group Project"
        }
      ]
    },
    { title: "Personal", 
      badges: [
        ...badges.filter(b => b.id === "4"),
        {
          id: "7",
          name: "Goal Getter",
          description: "Completed all your weekly objectives",
          icon: "https://img.icons8.com/fluency/48/bullseye.png", 
          earned: false,
          courseRequired: "Data Analysis",
          activityRequired: "Data Visualization Exercise"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Badges</h1>
        
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold">Progress</h2>
            <div className="text-sm text-red-900 font-medium">
              {badges.filter(b => b.earned).length}/{allBadgeTypes.flat().length} Earned
            </div>
          </div>
          
          <Tabs defaultValue="academics" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
              <TabsTrigger value="personal">Personal</TabsTrigger>
            </TabsList>
            
            {allBadgeTypes.map(type => (
              <TabsContent key={type.title.toLowerCase()} value={type.title.toLowerCase()}>
                <div className="grid grid-cols-1 gap-3">
                  {type.badges.map((badge) => (
                    <div 
                      key={badge.id} 
                      className={`p-4 rounded-xl flex items-center gap-3 ${
                        badge.earned 
                          ? "bg-red-50 border border-red-100" 
                          : "bg-gray-100 opacity-80"
                      }`}
                    >
                      <div className="badge-icon">
                        <img src={badge.icon} alt={badge.name} className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{badge.name}</div>
                        <div className="text-gray-600 text-xs">{badge.description}</div>
                        
                        {badge.courseRequired && (
                          <div className="mt-1 flex items-center">
                            <BookOpen size={12} className="text-red-900 mr-1" />
                            <span className="text-xs text-gray-600">
                              Earn in: {badge.courseRequired}
                            </span>
                          </div>
                        )}
                      </div>
                      {badge.earned ? (
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          Earned
                        </div>
                      ) : (
                        <div className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded-full">
                          Locked
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/courses">
                    <Button className="w-full bg-red-900 hover:bg-red-800">
                      Go to courses to earn badges <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Badges;
